import Link from "next/link";
import { Heart, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-dark" />
            </div>
            <span className="text-xl font-bold font-display">VVI</span>
          </div>
          <p className="text-white/70 text-sm">Vision et Volonté d’Impact – ONG béninoise pour l’autonomisation des femmes, filles-mères et le soutien aux orphelins.</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/notre-action" className="hover:text-secondary transition">Notre action</Link></li>
            <li><Link href="/actualites" className="hover:text-secondary transition">Actualités</Link></li>
            <li><Link href="/rapports" className="hover:text-secondary transition">Rapports</Link></li>
            <li><Link href="/faire-un-don" className="hover:text-secondary transition">Faire un don</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-3">Contact</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary" />Zinvié, Abomey-Calavi, Bénin</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-secondary" />contact@vvi-ong.org</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ONG VVI. Tous droits réservés.
      </div>
    </footer>
  );
}