"use client";

const partners = [
  { name: "Union Européenne", initials: "UE" },
  { name: "UNICEF", initials: "UNICEF" },
  { name: "Gouvernement du Bénin", initials: "GB" },
  { name: "Ecobank", initials: "ECOBANK" },
  { name: "Fondation MTN", initials: "MTN" },
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
              {/* Avatar avec initiales */}
              <div className="w-24 h-24 rounded-xl bg-primary-light border border-primary/10 flex items-center justify-center text-primary font-bold text-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                {partner.initials}
              </div>
              <span className="text-sm text-gray-700 font-medium group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-muted italic">
          Vous souhaitez devenir partenaire ?{" "}
          <a
            href="mailto:contact@vvi-ong.org"
            className="text-primary font-semibold underline"
          >
            Contactez-nous
          </a>
        </p>
      </div>
    </section>
  );
}