// components/Partners.tsx
import Image from "next/image";

// Tableau de partenaires fictifs (à remplacer par les vrais)
const partners = [
  {
    name: "Union Européenne",
    logoUrl: "/images/partners/ue.png", // si l'image existe, elle sera affichée
    fallback: "UE",
  },
  {
    name: "UNICEF",
    logoUrl: "/images/partners/unicef.png",
    fallback: "UNICEF",
  },
  {
    name: "Gouvernement du Bénin",
    logoUrl: "/images/partners/gvt-benin.png",
    fallback: "GB",
  },
  {
    name: "Ecobank",
    logoUrl: "/images/partners/ecobank.png",
    fallback: "ECOBANK",
  },
  {
    name: "Fondation MTN",
    logoUrl: "/images/partners/mtn.png",
    fallback: "MTN",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
          Ils nous font confiance
        </h2>
        <p className="text-gray-muted mb-12 max-w-2xl mx-auto">
          Nos actions sont possibles grâce au soutien de partenaires techniques, financiers et institutionnels.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center gap-3 hover:scale-105 transition-transform"
            >
              {/* Logos ou fallback */}
              {partner.logoUrl ? (
                <div className="w-24 h-24 relative rounded-xl overflow-hidden shadow-sm border border-primary/10 bg-white p-2">
                  <Image
                    src={partner.logoUrl}
                    alt={partner.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-xl bg-primary-light border border-primary/10 flex items-center justify-center text-primary font-bold text-lg shadow-sm">
                  {partner.fallback}
                </div>
              )}
              <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-muted italic">
          Vous souhaitez devenir partenaire ? <a href="mailto:contact@vvi-ong.org" className="text-primary font-semibold underline">Contactez-nous</a>
        </p>
      </div>
    </section>
  );
}