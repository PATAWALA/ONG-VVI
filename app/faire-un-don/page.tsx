import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Donation from "@/components/Donation";

export default function DonationPage() {
  return (
    <>
      <main>
        <section className="bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Faire un don</h1>
            <p className="mt-4 text-white/80 text-lg">Chaque euro contribue à changer des vies.</p>
          </div>
        </section>
        <Donation />
        {/* Informations bancaires / autre */}
        <section className="py-12 bg-off-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">Autres moyens de soutien</h2>
            <p className="text-gray-muted">Virement bancaire : <strong>BANK VVI - IBAN : BJ00 0000 0000 0000 0000</strong></p>
            <p className="text-gray-muted mt-2">Contactez-nous pour un reçu fiscal : <strong>contact@vvi-ong.org</strong></p>
          </div>
        </section>
      </main>
    </>
  );
}