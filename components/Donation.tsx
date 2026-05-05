// components/Donation.tsx
import { Heart } from "lucide-react";
import Link from "next/link";

const donations = [
  {
    amount: "10 €",
    label: "Un repas équilibré pour un orphelin pendant une semaine",
    highlight: false,
  },
  {
    amount: "25 €",
    label: "Un kit d'hygiène et une consultation pour une fille-mère",
    highlight: true, // option recommandée
  },
  {
    amount: "50 €",
    label: "Une session de formation professionnelle pour une femme",
    highlight: false,
  },
];

const Donation = () => {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
            Faites la différence aujourd’hui
          </h2>
          <p className="mt-4 text-gray-muted max-w-2xl mx-auto">
            Votre don finance directement nos actions de terrain. Chaque euro compte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {donations.map((d, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 text-center transition-all ${
                d.highlight
                  ? "bg-primary text-pure-white shadow-xl scale-105 border-2 border-secondary"
                  : "bg-pure-white shadow-sm border border-primary/10 hover:shadow-md"
              }`}
            >
              {d.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Recommandé
                </span>
              )}
              <Heart
                className={`mx-auto w-8 h-8 mb-4 ${
                  d.highlight ? "text-secondary" : "text-secondary"
                }`}
              />
              <p className="text-3xl font-bold font-display">{d.amount}</p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  d.highlight ? "text-white/90" : "text-gray-muted"
                }`}
              >
                {d.label}
              </p>
              <Link
                href="/faire-un-don"
                className={`mt-6 inline-block w-full py-3 rounded-full font-semibold transition ${
                  d.highlight
                    ? "bg-secondary text-primary-dark hover:bg-secondary-dark"
                    : "bg-primary-light text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Faire un don
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-gray-muted">
          Paiement 100% sécurisé. Reçu fiscal délivré pour les dons.
        </p>
      </div>
    </section>
  );
};

export default Donation;