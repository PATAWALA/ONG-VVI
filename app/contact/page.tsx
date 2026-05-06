// app/contact/page.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">Contactez-nous</h1>
          <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
            Une question, une suggestion, une envie de collaborer ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche : formulaire */}
          <div className="bg-off-white p-8 rounded-2xl shadow-sm border border-primary/10">
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Envoyez-nous un message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                  placeholder="vous@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                  placeholder="Objet de votre message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                  placeholder="Écrivez votre message ici..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 rounded-full hover:bg-primary-dark transition shadow-md"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Colonne droite : informations */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary mb-6">Nos coordonnées</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Siège social</p>
                    <p className="text-gray-muted">Zinvié, Abomey-Calavi, Bénin</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:contact@vvi-ong.org" className="text-primary hover:underline">contact@vvi-ong.org</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Téléphone</p>
                    <a href="tel:+22900000000" className="text-primary hover:underline">+229 00 00 00 00</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Heures d'ouverture</p>
                    <p className="text-gray-muted">Lundi - Vendredi : 8h - 17h</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Bloc don */}
            <div className="bg-primary-light p-6 rounded-2xl border border-primary/20">
              <h3 className="font-bold text-primary mb-2">Faire un don</h3>
              <p className="text-sm text-gray-700 mb-3">
                IBAN : BJ66 BJ06 2010 2111 1190 0190 0179 (Ecobank)
              </p>
              <a
                href="/faire-un-don"
                className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition"
              >
                Page de don
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}