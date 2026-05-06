// app/urgence/page.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Baby, AlertTriangle } from "lucide-react";

export default function UrgencePage() {
  return (
    <main>
      {/* Hero section avec image dure */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <Image
          src="/images/urgence-hero.jpg"
          alt="Enfant vulnérable"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Ils ont besoin de nous.<br />
            <span className="text-secondary">Maintenant.</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Derrière chaque chiffre, une vie brisée. Des orphelins sans avenir, des mères abandonnées, 
            des enfants que le monde oublie. Votre main peut réécrire leur histoire.
          </p>
          <Link
            href="/faire-un-don"
            className="inline-flex items-center gap-3 bg-secondary text-primary-dark font-bold px-8 py-4 rounded-full text-lg hover:bg-secondary-dark transition shadow-2xl hover:shadow-3xl"
          >
            Agir maintenant <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Statistiques choc */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
              Des chiffres qui glacent le sang
            </h2>
            <p className="text-gray-muted mt-4 max-w-2xl mx-auto">
              Les données sont accablantes. Derrière chaque chiffre, une vie, un visage, une histoire.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              icon={<Baby className="w-10 h-10 text-secondary" />}
              number="153 millions"
              label="d'orphelins dans le monde"
              source="UNICEF, 2024"
            />
            <StatCard
              icon={<Users className="w-10 h-10 text-secondary" />}
              number="287 000"
              label="femmes meurent chaque année en couches"
              source="OMS, 2023"
            />
            <StatCard
              icon={<AlertTriangle className="w-10 h-10 text-secondary" />}
              number="1 fille sur 3"
              label="mariée avant 18 ans en Afrique subsaharienne"
              source="UNICEF"
            />
            <StatCard
              icon={<Heart className="w-10 h-10 text-secondary" />}
              number="85 %"
              label="des filles-mères vivent sous le seuil de pauvreté"
              source="Banque mondiale"
            />
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : Visite aux enfants handicapés */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/handicap.jpg"
                alt="Visite de VVI à une école pour enfants handicapés"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">
                Aucun enfant laissé pour compte
              </h2>
              <p className="text-gray-muted leading-relaxed">
                VVI a rendu visite à une école pour enfants en situation de handicap. 
                Nous avons partagé des moments de joie, distribué des fournitures et 
                réaffirmé notre engagement : le handicap ne doit jamais être une barrière 
                à l’éducation et à la dignité. Ces enfants ont du potentiel, et nous 
                sommes là pour les aider à le révéler.
              </p>
              <Link
                href="/faire-un-don"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Soutenir cette mission <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portraits émotionnels */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            Des visages, des combats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortraitCard
              image="/images/portrait-orphelin.jpg"
              name="Koffi, 8 ans"
              story="Orphelin de père et de mère, il vit avec sa grand-mère dans une case en terre. Sans VVI, il ne serait jamais allé à l'école."
            />
            <PortraitCard
              image="/images/portrait-fille-mere.jpg"
              name="Aminata, 17 ans"
              story="Fille-mère rejetée par sa famille. Grâce à une formation en couture, elle peut aujourd'hui nourrir son bébé."
            />
            <PortraitCard
              image="/images/portrait-femme.jpg"
              name="Maman Lucie, 45 ans"
              story="Veuve avec 6 enfants, elle a rejoint une coopérative agricole soutenue par VVI. Son revenu a triplé."
            />
          </div>
        </div>
      </section>

      {/* Citation choc */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="font-display text-2xl sm:text-3xl italic leading-relaxed mb-6">
            « L’indifférence tue plus que la maladie. Chaque geste compte. Chaque don est une vie. »
          </blockquote>
          <p className="text-white/80">— Équipe VVI</p>
        </div>
      </section>

      {/* Comment votre don change tout */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-12">
            Avec vous, tout devient possible
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactDon
              amount="10 €"
              text="Un kit d'hygiène et un repas chaud pour un orphelin"
            />
            <ImpactDon
              amount="25 €"
              text="Une consultation prénatale et des vitamines pour une fille-mère"
              highlighted
            />
            <ImpactDon
              amount="50 €"
              text="Une formation professionnelle complète pour une femme"
            />
          </div>
          <Link
            href="/faire-un-don"
            className="mt-10 inline-flex items-center gap-2 bg-secondary text-primary-dark font-bold px-8 py-4 rounded-full text-lg hover:bg-secondary-dark transition shadow-xl"
          >
            Je passe à l'action <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}

// ---- Sous-composants (inchangés) ----
function StatCard({
  icon,
  number,
  label,
  source,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  source: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 text-center hover:shadow-md transition">
      <div className="flex justify-center mb-4">{icon}</div>
      <p className="text-3xl font-bold text-primary mb-1">{number}</p>
      <p className="text-gray-700 font-medium">{label}</p>
      <p className="text-xs text-gray-400 mt-2">Source : {source}</p>
    </div>
  );
}

function PortraitCard({
  image,
  name,
  story,
}: {
  image: string;
  name: string;
  story: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden group hover:shadow-md transition">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-primary mb-2">{name}</h3>
        <p className="text-gray-muted text-sm leading-relaxed">{story}</p>
      </div>
    </div>
  );
}

function ImpactDon({
  amount,
  text,
  highlighted = false,
}: {
  amount: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-2xl border transition ${
        highlighted
          ? "bg-primary text-white border-secondary shadow-xl scale-105"
          : "bg-white border-primary/10 shadow-sm hover:shadow-md"
      }`}
    >
      <p className="text-4xl font-bold font-display mb-4">{amount}</p>
      <p className="text-lg">{text}</p>
    </div>
  );
}