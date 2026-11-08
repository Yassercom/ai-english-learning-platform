import type { ModuleMeta } from "./types";

export const MODULES: ModuleMeta[] = [
  { id: 1, title: "Academic & General English", fr: "Anglais général et universitaire", desc: "Se présenter, suivre un cours, prendre des notes, travailler en groupe et présenter des chiffres.", level: "A1", icon: "🎓", hue: 262 },
  { id: 2, title: "Computer Science Fundamentals", fr: "Bases de l'informatique", desc: "Matériel, logiciels, algorithmes, réseaux, bases de données et sécurité.", level: "A1–A2", icon: "💻", hue: 217 },
  { id: 3, title: "Programming & Python", fr: "Programmation et Python", desc: "Variables, boucles, fonctions, structures de données, objets, erreurs et documentation.", level: "A2", icon: "🐍", hue: 142 },
  { id: 4, title: "Mathematics for AI", fr: "Mathématiques pour l'IA", desc: "Algèbre, algèbre linéaire, dérivées, probabilités, statistiques et optimisation.", level: "A2–B1", icon: "📐", hue: 28 },
  { id: 5, title: "Data Science", fr: "Science des données", desc: "Collecte, nettoyage, exploration, visualisation, inférence et communication des résultats.", level: "B1", icon: "📊", hue: 187 },
  { id: 6, title: "Machine Learning", fr: "Apprentissage automatique", desc: "Types d'apprentissage, régression, classification, surapprentissage, métriques et algorithmes.", level: "B1", icon: "🤖", hue: 330 },
  { id: 7, title: "Deep Learning", fr: "Apprentissage profond", desc: "Réseaux de neurones, rétropropagation, régularisation, CNN, RNN et pratique de l'entraînement.", level: "B1–B2", icon: "🧠", hue: 280 },
  { id: 8, title: "Computer Vision", fr: "Vision par ordinateur", desc: "Images, classification, détection, segmentation, vidéo et modèles de vision modernes.", level: "B2", icon: "👁️", hue: 12 },
  { id: 9, title: "NLP & Large Language Models", fr: "TAL et grands modèles de langage", desc: "Texte, embeddings, Transformers, LLM, prompting, RAG et évaluation.", level: "B2", icon: "💬", hue: 200 },
  { id: 10, title: "Advanced AI", fr: "IA avancée", desc: "Apprentissage par renforcement, IA générative, graphes, méthodes bayésiennes, explicabilité, multimodal.", level: "B2–C1", icon: "🚀", hue: 45 },
  { id: 11, title: "AI Engineering", fr: "Ingénierie de l'IA", desc: "Git, tests, MLOps, conteneurs, API, monitoring, optimisation et travail en équipe.", level: "C1", icon: "🛠️", hue: 160 },
  { id: 12, title: "Research, Ethics & Professional English", fr: "Recherche, éthique et anglais professionnel", desc: "Lire et écrire un article, éthique, régulation, entretien académique et soutenance.", level: "C1", icon: "⚖️", hue: 340 },
];

export const CATEGORIES = [
  "General English",
  "Computer Science",
  "Python",
  "Mathematics",
  "Data Science",
  "ML",
  "DL",
  "Computer Vision",
  "NLP",
  "Advanced AI",
  "Engineering",
  "Research & Ethics",
];
