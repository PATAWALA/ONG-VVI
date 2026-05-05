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
    title: "Distribution de kits scolaires à Zinvié",
    date: "15 Avril 2025",
    imageUrl: "/images/news-kits-scolaires.jpg",
    summary:
      "120 enfants orphelins ont reçu des fournitures scolaires pour la rentrée 2025. Une journée placée sous le signe de l'espoir.",
    category: "Éducation",
  },
  {
    id: "2",
    title: "Formation en leadership féminin : 50 femmes autonomisées",
    date: "02 Avril 2025",
    imageUrl: "/images/news-leadership.jpg",
    summary:
      "Cinq sous-groupes de 10 femmes ont été constitués pour suivre un programme d'entrepreneuriat à Wawata Todja.",
    category: "Autonomisation",
  },
  {
    id: "3",
    title: "Campagne de sensibilisation sur l’hygiène menstruelle",
    date: "20 Mars 2025",
    imageUrl: "/images/news-hygiene.jpg",
    summary:
      "Des séances d’information ont permis aux filles-mères d’apprendre les bonnes pratiques d’hygiène et de planification familiale.",
    category: "Santé",
  },
  {
    id: "4",
    title: "Consultation médicale mobile pour 200 femmes et enfants",
    date: "10 Mars 2025",
    imageUrl: "/images/news-sante.jpg",
    summary:
      "Une équipe médicale s’est déplacée dans le village pour offrir des consultations prénatales et des dépistages MST.",
    category: "Santé",
  },
  {
    id: "5",
    title: "Création de coopératives agricoles féminines",
    date: "28 Février 2025",
    imageUrl: "/images/news-cooperatives.jpg",
    summary:
      "Les femmes de Zinvié se regroupent pour mutualiser leurs ressources et améliorer leurs rendements.",
    category: "Autonomisation",
  },
];