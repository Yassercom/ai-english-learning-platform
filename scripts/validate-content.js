const ts=require('typescript');const fs=require('fs');const path=require('path');
const dir='src/data/content';
const out={};
let total=0;const problems=[];let terms=0,exprs=0;const seen=new Map();
for(const f of fs.readdirSync(dir)){ if(f==='index.ts')continue;
 const src=fs.readFileSync(path.join(dir,f),'utf8').replace(/import .*\n/,'');
 const js=ts.transpileModule(src.replace(/: RawLesson\[\]/,''),{compilerOptions:{module:'commonjs'}}).outputText;
 const m={exports:{}};new Function('module','exports',js)(m,m.exports);
 for(const k in m.exports){for(const l of m.exports[k]){total++;
  const w=l.w.split('\n').map(x=>x.trim()).filter(Boolean);
  const x=l.x.split('\n').map(x=>x.trim()).filter(Boolean);
  terms+=w.length;exprs+=x.length;
  if(w.length!==25)problems.push(l.id+' terms='+w.length);
  if(x.length!==10)problems.push(l.id+' exprs='+x.length);
  w.forEach(t=>{if(t.split('|').length!==3)problems.push(l.id+' bad term '+t)});
  x.forEach(t=>{if(t.split('|').length!==2)problems.push(l.id+' bad expr '+t)});
  l.d.forEach((d,i)=>{const ls=d[1].split('\n');ls.forEach(z=>{if(!z.includes('||')||!z.includes(':'))problems.push(l.id+' bad dlg '+z.slice(0,30))});if(ls.length<4)problems.push(l.id+' short dlg')});
  if(l.q.length<3)problems.push(l.id+' q'); if(l.rq.length<2)problems.push(l.id+' rq');
  [...l.q,...l.rq].forEach(q=>{if(q[2]<0||q[2]>=q[1].length)problems.push(l.id+' bad answer idx '+q[0].slice(0,20))});
  l.da.split('\n').forEach(z=>{if(!z.includes(':'))problems.push(l.id+' bad darija')});
  const ids=l.p.words.split(',');if(ids.length<4)problems.push(l.id+' pron words');
  w.forEach(t=>{const e=t.split('|')[0].toLowerCase();seen.set(e,(seen.get(e)||0)+1)});
 }}
}
console.log('lessons',total,'terms',terms,'exprs',exprs);
console.log(problems.join('\n')||'no problems');
const dup=[...seen].filter(([k,v])=>v>1).map(([k,v])=>k+':'+v);console.log('duplicates:',dup.join(', '));
