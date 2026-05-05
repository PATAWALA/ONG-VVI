import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { newsArticles } from "@/data/news";

export default function LatestNews() {
  const latest = newsArticles.slice(0, 3);
  return (
    <section className="py-20 bg-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary">Actualités du terrain</h2>
          <p className="mt-4 text-gray-muted max-w-2xl mx-auto">Suivez nos dernières missions et l’impact concret de vos dons.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-muted gap-3 mb-2"><Calendar className="w-4 h-4" /><span>{post.date}</span></div>
                <h3 className="font-display font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">{post.title}</h3>
                <p className="text-gray-muted text-sm line-clamp-3">{post.summary}</p>
                <Link href={`/actualites?id=${post.id}`} className="mt-4 inline-flex items-center gap-1 text-primary font-semibold text-sm hover:text-secondary transition-colors">Lire la suite <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/actualites" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition shadow hover:shadow-md">Toutes les actualités <ArrowRight className="w-5 h-5" /></Link>
        </div>
      </div>
    </section>
  );
}