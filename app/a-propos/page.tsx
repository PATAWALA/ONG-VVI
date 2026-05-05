import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero section */}
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">À propos de VVI</h1>
            <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
              Vision et Volonté d’Impact – ONG créée en 2020, engagée pour l’autonomisation des femmes, 
              filles-mères et l’assistance aux enfants orphelins.
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary mb-6">Notre histoire</h2>
              <p className="text-gray-muted leading-relaxed">
                Née en 2020 d’une volonté citoyenne, l’ONG VVI a connu une mutation juridique et institutionnelle 
                pour devenir un acteur majeur du développement communautaire au Bénin. Basée à Zinvié, elle 
                intervient auprès des femmes, des filles-mères, des orphelins et des personnes en situation de handicap.
              </p>
            </div>
            <img src="/images/about-hero.jpg" alt="Équipe VVI" className="rounded-2xl shadow-lg object-cover w-full" />
          </div>
        </section>

        {/* Vision, Mission, Objectifs */}
        <section className="py-12 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-display text-xl font-bold text-primary mb-3">Vision</h3>
              <p className="text-gray-muted">Être le plus grand accélérateur de développement communautaire, à travers la performance de ses actions et de ses équipes.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-display text-xl font-bold text-primary mb-3">Mission</h3>
              <p className="text-gray-muted">Fournir aux populations vulnérables, organisations et entreprises des solutions intégrées destinées à l’amélioration continue des situations communautaires.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-display text-xl font-bold text-primary mb-3">Objectifs</h3>
              <ul className="text-gray-muted space-y-2 list-disc pl-5">
                <li>Promouvoir le bien-être social de l’enfance et des filles mères</li>
                <li>Contribuer à l’autonomie financière des femmes</li>
                <li>Assister les personnes en situation de handicap et de maladie</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Organigramme simplifié */}
        <section className="py-16 bg-pure-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-8">Notre organisation</h2>
            <div className="flex flex-col items-center gap-4 bg-primary-light p-8 rounded-2xl">
              <div className="bg-primary text-white px-6 py-2 rounded-full font-semibold">Conseil d’Administration</div>
              <div className="border-l-2 border-primary h-6"></div>
              <div className="bg-secondary text-primary-dark px-6 py-2 rounded-full font-semibold">Directeur Exécutif</div>
              <div className="border-l-2 border-primary h-6"></div>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-2 rounded-full border border-primary/20">Secrétaire-Comptable</div>
                <div className="bg-white px-4 py-2 rounded-full border border-primary/20">Chargée de Projet</div>
              </div>
              <div className="border-l-2 border-primary h-6"></div>
              <div className="flex gap-4 flex-wrap justify-center">
                <div className="bg-white px-3 py-1 rounded-full text-sm border border-primary/10">Animateur</div>
                <div className="bg-white px-3 py-1 rounded-full text-sm border border-primary/10">Animateur</div>
                <div className="bg-white px-3 py-1 rounded-full text-sm border border-primary/10">Animateur</div>
              </div>
            </div>
          </div>
        </section>

        {/* Expériences */}
        <section className="py-16 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">Nos expériences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <h3 className="font-bold text-lg mb-2">Formation en leadership et entrepreneuriat féminin</h3>
                <p className="text-gray-muted text-sm">50 femmes de Wawata Todja formées, regroupées en coopératives, coaching.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <h3 className="font-bold text-lg mb-2">Sensibilisation MST et hygiène</h3>
                <p className="text-gray-muted text-sm">Séances pour filles-mères sur les maladies sexuellement transmissibles et l’hygiène corporelle.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <h3 className="font-bold text-lg mb-2">Don aux orphelins</h3>
                <p className="text-gray-muted text-sm">Vêtements et moments festifs pour 10 enfants orphelins du village.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}