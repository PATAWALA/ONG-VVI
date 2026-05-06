// app/a-propos/page.tsx

export default function AboutPage() {
  return (
    <main>
      {/* ===== HERO avec logo en filigrane ===== */}
      <section className="relative bg-primary text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/logo.jpeg')",
            backgroundSize: "contain",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">À propos de VVI</h1>
          <p className="mt-4 text-white/80 text-lg max-w-3xl mx-auto">
            Vision et Volonté d’Impact – ONG créée en 2020, engagée pour l’autonomisation des femmes,
            filles-mères et l’assistance aux enfants orphelins.
          </p>
        </div>
      </section>

      {/* ===== NOTRE HISTOIRE (grand logo rectangulaire) ===== */}
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
          <div className="flex justify-center">
            <img
              src="/images/logo.jpeg"
              alt="Logo ONG VVI"
              className="max-w-full h-auto w-64 sm:w-80 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===== VISION, MISSION, OBJECTIFS ===== */}
      <section className="py-12 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
            <h3 className="font-display text-xl font-bold text-primary mb-3">Vision</h3>
            <p className="text-gray-muted">
              Être le plus grand accélérateur de développement communautaire, à travers la performance de ses actions et de ses équipes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-primary/10">
            <h3 className="font-display text-xl font-bold text-primary mb-3">Mission</h3>
            <p className="text-gray-muted">
              Fournir aux populations vulnérables, organisations et entreprises des solutions intégrées destinées à l’amélioration continue des situations communautaires.
            </p>
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

      {/* ===== ORGANIGRAMME AMÉLIORÉ ===== */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-12">Notre organisation</h2>

          {/* Conseil Administration */}
          <div className="flex justify-center mb-6">
            <OrgCard
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
              title="Conseil d'Administration"
              description="Définit la stratégie et contrôle la gestion"
            />
          </div>
          <ArrowDown />

          {/* Directeur Exécutif */}
          <div className="flex justify-center mb-6">
            <OrgCard
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              title="Directeur Exécutif"
              description="Pilote les projets et coordonne les équipes"
            />
          </div>
          <ArrowDown />

          {/* Niveau intermédiaire : deux postes côte à côte */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-6">
            <OrgCard
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
              title="Secrétaire-Comptable"
              description="Gère les finances et l'administration"
            />
            <OrgCard
              image="https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop&crop=face"
              title="Chargée de Projet"
              description="Supervise les actions sur le terrain"
            />
          </div>
          <ArrowDown />

          {/* Animateurs */}
          <div className="flex flex-wrap justify-center gap-6">
            <AnimateurCard image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" />
            <AnimateurCard image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" />
            <AnimateurCard image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" />
          </div>
        </div>
      </section>

      {/* ===== NOS EXPÉRIENCES ===== */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">Nos expériences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-bold text-lg mb-2">Formation en leadership et entrepreneuriat féminin</h3>
              <p className="text-gray-muted text-sm">
                50 femmes de Wawata Todja formées, regroupées en coopératives, coaching.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-bold text-lg mb-2">Sensibilisation MST et hygiène</h3>
              <p className="text-gray-muted text-sm">
                Séances pour filles-mères sur les maladies sexuellement transmissibles et l’hygiène corporelle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
              <h3 className="font-bold text-lg mb-2">Don aux orphelins</h3>
              <p className="text-gray-muted text-sm">
                Vêtements et moments festifs pour 10 enfants orphelins du village.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ---------- Composants réutilisables ----------

/** Flèche de liaison hiérarchique */
function ArrowDown() {
  return (
    <div className="flex flex-col items-center my-2">
      {/* Ligne verticale */}
      <div className="w-0.5 h-8 bg-primary/40"></div>
      {/* Pointe de flèche */}
      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/40"></div>
    </div>
  );
}

/** Carte d'un poste avec photo, titre, description courte */
function OrgCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-off-white rounded-2xl p-6 shadow-sm border border-primary/10 hover:shadow-md transition text-center w-56">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-full border-4 border-primary/30"
        />
      </div>
      <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
      <p className="text-sm text-gray-muted leading-relaxed">{description}</p>
    </div>
  );
}

/** Carte animateur simplifiée */
function AnimateurCard({ image }: { image: string }) {
  return (
    <div className="flex flex-col items-center w-24">
      <div className="relative w-16 h-16 mb-2">
        <img
          src={image}
          alt="Animateur"
          className="w-full h-full object-cover rounded-full border-2 border-primary/30"
        />
      </div>
      <span className="text-xs font-medium text-primary">Animateur</span>
    </div>
  );
}