import { NextResponse } from "next/server";

// Actualités IA réelles, lues depuis des flux RSS publics. Rien n'est inventé :
// si un flux est inaccessible, il est simplement signalé dans "errors".
export const dynamic = "force-dynamic";

const FEEDS = [
  { source: "MIT News — Artificial intelligence", url: "https://news.mit.edu/topic/mitartificial-intelligence2-rss.xml" },
  { source: "Hugging Face Blog", url: "https://huggingface.co/blog/feed.xml" },
  { source: "OpenAI News", url: "https://openai.com/news/rss.xml" },
  { source: "Google — AI", url: "https://blog.google/innovation-and-ai/technology/ai/rss/" },
];

interface NewsItem {
  title: string;
  link: string;
  date: string; // ISO
  source: string;
}

function decode(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tag(block: string, name: string): string | null {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return m ? decode(m[1]) : null;
}

function parse(xml: string, source: string): NewsItem[] {
  const blocks = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) ?? xml.match(/<entry[\s>][\s\S]*?<\/entry>/gi) ?? [];
  const out: NewsItem[] = [];
  for (const b of blocks.slice(0, 40)) {
    const title = tag(b, "title");
    let link = tag(b, "link");
    if (!link) {
      const m = b.match(/<link[^>]*href="([^"]+)"/i);
      link = m ? m[1] : null;
    }
    const rawDate = tag(b, "pubDate") ?? tag(b, "published") ?? tag(b, "updated") ?? tag(b, "dc:date");
    const d = rawDate ? new Date(rawDate) : null;
    if (!title || !link || !d || Number.isNaN(d.getTime())) continue; // pas de date fiable = pas d'actualité affichée
    out.push({ title, link, date: d.toISOString(), source });
  }
  return out.sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 6);
}

export async function GET() {
  const errors: string[] = [];
  const results = await Promise.all(
    FEEDS.map(async (f) => {
      try {
        const res = await fetch(f.url, { headers: { "user-agent": "Mozilla/5.0 (AI English Lab)" }, signal: AbortSignal.timeout(9000), redirect: "follow" });
        if (!res.ok) throw new Error(String(res.status));
        return parse(await res.text(), f.source);
      } catch {
        errors.push(f.source);
        return [];
      }
    }),
  );
  const items = results.flat().sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return NextResponse.json({ items, errors, fetchedAt: new Date().toISOString() }, { headers: { "cache-control": "public, max-age=900" } });
}
