import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-pure-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Autonomisons les femmes, <br />
            <span className="text-secondary">construisons l’avenir</span>
          </h1>
          <p className="max-w-xl text-lg text-white/90">
            VVI accompagne les filles-mères et les orphelins au Bénin avec des formations, des soins et un soutien durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/faire-un-don" className="bg-secondary text-primary-dark font-bold px-8 py-4 rounded-full hover:bg-secondary-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Faire un don <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/notre-action" className="border-2 border-pure-white/40 text-pure-white font-semibold px-8 py-4 rounded-full hover:bg-pure-white/10 transition">
              Découvrir notre impact
            </Link>
          </div>
          <div className="pt-4 flex justify-center lg:justify-start gap-8 text-sm font-medium">
            <div><span className="text-secondary font-bold text-2xl">50+</span><br />femmes formées</div>
            <div><span className="text-secondary font-bold text-2xl">120+</span><br />orphelins soutenus</div>
          </div>
        </div>
        <div className="flex-1 max-w-md lg:max-w-none">
          <img src="/images/hero-women.jpg" alt="Femmes béninoises en formation" className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/3] border-4 border-pure-white/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;