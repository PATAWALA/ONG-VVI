// app/actualites/page.tsx
"use client";
import { useState } from "react";
import { newsArticles } from "@/data/news";
import { Calendar, Search } from "lucide-react";
import Link from "next/link";

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["Santé", "Éducation", "Autonomisation"];

  const filtered = newsArticles.filter((post) => {
    const matchCat = !selectedCategory || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-off-white min-h-screen pb-20">
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Actualités & Rapports</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Suivez le quotidien de nos actions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-primary/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${!selectedCategory ? "bg-primary text-white" : "bg-primary-light text-primary hover:bg-primary/20"}`}>Tous</button>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat ? "bg-secondary text-primary-dark" : "bg-primary-light text-primary hover:bg-primary/20"}`}>{cat}</button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-full border border-primary/20 focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden hover:shadow-md transition">
              <div className="relative h-48">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span className="bg-secondary text-primary-dark text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-muted gap-2 mb-2">
                  <Calendar className="w-4 h-4" /><span>{post.date}</span>
                </div>
                <h2 className="font-display text-lg font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-muted text-sm line-clamp-3">{post.summary}</p>
                <Link href={`/actualites?id=${post.id}`} className="mt-4 inline-block text-primary font-semibold text-sm hover:underline">Lire la suite →</Link>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-20"><p className="text-gray-muted text-lg">Aucun article trouvé.</p></div>
        )}
      </div>
    </div>
  );
}