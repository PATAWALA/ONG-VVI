"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription newsletter :", email);
    setSubmitted(true);
  };

  return (
    <section className="bg-primary py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">Restez connecté à notre mission</h3>
        <p className="mt-3 text-white/80 text-lg">Recevez nos rapports d’activité et actualités directement par email.</p>
        {submitted ? (
          <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6 text-white">Merci pour votre inscription !</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="votre@email.com" className="flex-1 py-3 px-5 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary" />
            <button type="submit" className="bg-secondary text-primary-dark font-bold px-8 py-3 rounded-full hover:bg-secondary-dark transition flex items-center justify-center gap-2">S’inscrire <Send className="w-5 h-5" /></button>
          </form>
        )}
      </div>
    </section>
  );
}