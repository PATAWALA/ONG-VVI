import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, HeartPulse, Baby, Lightbulb } from "lucide-react";

const actions = [
  { title: "Leadership féminin", icon: Users, desc: "Formations, microcrédit, création de groupements." },
  { title: "Santé & bien-être", icon: HeartPulse, desc: "Consultations, sensibilisation MST, kits d’hygiène." },
  { title: "Soutien aux orphelins", icon: Baby, desc: "Scolarisation, nutrition, vêtements." },
  { title: "Autonomisation", icon: Lightbulb, desc: "Entrepreneuriat féminin, coopératives agricoles." },
];

export default function ActionPage() {
  return (
    <>
      <main>
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Notre action</h1>
            <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
              Nous agissons sur le terrain avec une approche intégrée : formation, santé, éducation et autonomisation économique.
            </p>
          </div>
        </section>

        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {actions.map((item, i) => (
              <div key={i} className="bg-off-white p-8 rounded-2xl border border-primary/10 hover:shadow-md transition flex gap-5">
                <div className="bg-primary/10 p-4 rounded-xl text-primary"><item.icon className="w-8 h-8" /></div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-off-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Notre démarche</h2>
            <p className="text-gray-muted leading-relaxed">
              Prendre en compte les contraintes de la population cible, appuyer nos démarches sur les réalités locales. 
              Renforcer les valeurs qui vous sont chères. Une application systématique de la notion de qualité totale 
              dans la gestion de chaque mission. Une intégration de la population, afin de permettre sa participation 
              à l’élaboration des solutions de gestion envisageables.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}