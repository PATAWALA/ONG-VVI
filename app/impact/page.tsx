import Impact from "@/components/Impact";

export default function ImpactPage() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Notre impact</h1>
          <p className="mt-4 text-white/80 text-lg">Des résultats concrets mesurés sur le terrain.</p>
        </div>
      </section>
      <Impact />
      <section className="py-12 bg-off-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><span className="text-3xl font-bold text-primary">50+</span><p className="text-gray-muted">femmes formées</p></div>
          <div><span className="text-3xl font-bold text-secondary">200+</span><p className="text-gray-muted">consultations/an</p></div>
          <div><span className="text-3xl font-bold text-primary">120+</span><p className="text-gray-muted">orphelins soutenus</p></div>
          <div><span className="text-3xl font-bold text-secondary">5</span><p className="text-gray-muted">villages atteints</p></div>
        </div>
      </section>
    </main>
  );
}