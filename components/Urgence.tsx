// components/UrgenceSection.tsx
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

const urgenceCards = [
  {
    image: "/images/urgence-orphelins.jpg",
    title: "Enfants orphelins",
    text: "Ils ont perdu leurs parents. Sans toit, sans repas, sans école. Votre don leur redonne une famille.",
  },
  {
    image: "/images/urgence-filles-meres.jpg",
    title: "Filles-mères abandonnées",
    text: "Rejetées, sans éducation ni soins. Une formation peut briser le cycle de la pauvreté.",
  },
  {
    image: "/images/urgence-femmes.jpg",
    title: "Femmes vulnérables",
    text: "Veuves, analphabètes, sans revenu. Avec un microcrédit, elles deviennent autonomes pour toujours.",
  },
];

export default function UrgenceSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Titre + Sous-texte */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <AlertTriangle className="w-4 h-4" />
            Il y a urgence
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ils comptent sur vous
          </h2>
          <p className="text-gray-muted text-lg max-w-2xl mx-auto">
            Chaque jour, des enfants orphelins, des filles-mères et des femmes vulnérables luttent pour survivre. Votre soutien peut tout changer.
          </p>
        </div>

        {/* Cartes images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {urgenceCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay + texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/urgence"
            className="bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition shadow-lg flex items-center justify-center gap-2"
          >
            Voir l'urgence <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/faire-un-don"
            className="bg-secondary text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-secondary-dark transition shadow-lg flex items-center justify-center gap-2"
          >
            Faire un don maintenant
          </Link>
        </div>
      </div>
    </section>
  );
}