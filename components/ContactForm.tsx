"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-pure-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-primary text-center mb-8">
          Contactez-nous
        </h2>
        {submitted ? (
          <div className="bg-primary-light border border-primary/20 rounded-xl p-8 text-center text-primary">
            Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input type="text" required className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={5} required className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary" />
            </div>
            <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition flex items-center justify-center gap-2 w-full sm:w-auto">
              Envoyer <Send className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}