import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const rapports = [
  { title: "Rapport annuel 2024", file: "/rapports/rapport-2024.pdf", date: "Janvier 2025" },
  { title: "Rapport semestriel 2024", file: "/rapports/rapport-s1-2024.pdf", date: "Juillet 2024" },
  { title: "Rapport de mission - Formation femmes", file: "/rapports/mission-formation.pdf", date: "Mars 2025" },
];

export default function RapportsPage() {
  return (
    <>
      <main>
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Rapports d’activités</h1>
            <p className="mt-4 text-white/80 text-lg">Transparence totale : consultez et téléchargez nos rapports.</p>
          </div>
        </section>
        <section className="py-16 bg-pure-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            {rapports.map((r, i) => (
              <div key={i} className="flex items-center justify-between bg-off-white p-6 rounded-2xl border border-primary/10 hover:shadow-md transition">
                <div className="flex items-center gap-4">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold">{r.title}</h3>
                    <p className="text-sm text-gray-muted">{r.date}</p>
                  </div>
                </div>
                <Link href={r.file} target="_blank" className="bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-primary-dark transition">
                  <Download className="w-4 h-4" /> Télécharger
                </Link>
              </div>
            ))}
            <p className="text-center text-sm text-gray-muted mt-10">
              Les rapports sont au format PDF. Pour toute demande spécifique, contactez-nous.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}