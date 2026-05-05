// data/news.ts

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  summary: string;
  category: "Santé" | "Éducation" | "Autonomisation";
  content?: string;
}

export const newsArticles: NewsPost[] = [
  {
    id: "1",
    title: "L’orphelinat VVI : un foyer pour 50 enfants",
    date: "10 Mai 2025",
    imageUrl: "/images/news-orphelinat.jpg",
    summary:
      "Notre orphelinat, bâti avec les moyens du bord, accueille aujourd’hui une cinquantaine d’enfants. Nous avons besoin de vous pour améliorer leurs conditions de vie.",
    category: "Éducation",
    content:
      "Construit en matériaux précaires, l’orphelinat de l’ONG VVI héberge et prend en charge 50 enfants sur les plans nutritionnel, sanitaire et éducatif. L’ambition est de les accompagner jusqu’à leur insertion professionnelle. Chaque don compte pour renforcer cette mission.",
  },
  {
    id: "2",
    title: "Le sourire d’un bébé, notre plus belle victoire",
    date: "28 Avril 2025",
    imageUrl: "/images/news-bebe-sourire.jpg", // nom adapté à l'image du bébé
    summary:
      "Ce bébé, pris en charge par l’ONG VVI, affiche un sourire qui résume à lui seul la raison de notre combat : redonner espoir aux plus vulnérables.",
    category: "Autonomisation",
    content:
      "Chaque enfant accueilli dans notre orphelinat retrouve progressivement le chemin de la joie. Ce tout-petit, habillé d’un T-shirt aux couleurs de VVI, incarne la résilience et l’amour que nous portons à chaque vie que nous touchons. Votre soutien nous permet de multiplier ces sourires.",
  },
  {
    id: "3",
    title: "Appel à sponsors : changeons des vies ensemble",
    date: "15 Mars 2025",
    imageUrl: "/images/news-sponsors.jpg",
    summary:
      "Nous invitons les personnes de bonne volonté à soutenir notre mission par des vivres, vêtements ou dons. Découvrez comment contribuer.",
    category: "Autonomisation",
    content:
      "Vous pouvez nous aider en nature (vivres, vêtements) ou par virement bancaire. IBAN : BJ66 BJ06 2010 2111 1190 0190 0179 (ECOBANK). Code SWIFT : ECOCBJBJ. Titulaire : ONG LA VOIX DES VISIONNAIRES INTERNATIONALE. Ensemble, faisons de notre rêve une réalité.",
  },
];