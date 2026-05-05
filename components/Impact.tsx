import { Users, HeartPulse, Baby } from "lucide-react";

const impacts = [
  {
    title: "Leadership féminin",
    description: "Formations en entrepreneuriat et accès au microcrédit pour 50 femmes à Zinvié.",
    icon: Users,
    stats: "50 femmes formées",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Santé & bien-être",
    description: "Consultations prénatales et sensibilisation à l’hygiène pour les filles-mères.",
    icon: HeartPulse,
    stats: "200 consultations/an",
    color: "bg-secondary/10 text-secondary-dark",
  },
  {
    title: "Soutien aux orphelins",
    description: "Scolarisation, nutrition et suivi psychologique pour plus de 120 enfants.",
    icon: Baby,
    stats: "120+ orphelins",
    color: "bg-primary-light text-primary-dark",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">Notre impact concret</h2>
          <p className="mt-4 text-gray-muted max-w-2xl mx-auto">
            Chaque action est pensée pour créer un changement durable dans les communautés vulnérables du Bénin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impacts.map((item, index) => (
            <div key={index} className="group relative bg-pure-white rounded-2xl p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`inline-flex rounded-xl p-3 ${item.color} mb-5`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-muted leading-relaxed mb-4">{item.description}</p>
              <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                <span className="text-primary font-semibold text-sm">{item.stats}</span>
                <span className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold">En savoir plus →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;