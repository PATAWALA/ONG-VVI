"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronUp } from "lucide-react";

const quickQuestions = [
  "Qui êtes-vous ?",
  "Quelle est votre vision ?",
  "Quels sont vos objectifs ?",
  "Où agissez-vous ?",
  "Comment puis-je aider ?",
  "Comment faire un don ?",
  "Contact",
];

const faq: Record<string, string> = {
  "qui êtes-vous":
    "Nous sommes l'ONG **Vision et Volonté d'Impact (VVI)**, une organisation béninoise née en 2020. Nous transformons des vies : autonomisation des femmes et des filles-mères, éducation, santé et soutien aux orphelins. Nous sommes la voix des sans-voix et la force des sans-force.",
  "quelle est votre vision":
    "Devenir le plus grand accélérateur de développement communautaire en Afrique. Chaque femme leader, chaque enfant soutenu, chaque communauté relevée.",
  "quels sont vos objectifs":
    "① Autonomiser financièrement les femmes. ② Améliorer la santé et le bien-être des filles-mères et des enfants. ③ Accompagner les orphelins jusqu'à leur insertion professionnelle. Impact durable.",
  "où agissez-vous":
    "Basés à Zinvié (Abomey-Calavi), mais notre ambition est nationale et panafricaine. Nous intervenons dans plusieurs villages du Bénin et rêvons d'étendre notre méthode à toute l'Afrique.",
  "comment puis-je aider":
    "Faites un don (même modeste), devenez bénévole, proposez un partenariat, ou parlez de nous. Chaque geste compte pour redonner espoir. 💪🏾",
  "comment faire un don":
    "Rendez-vous sur la page **Faire un don** ou utilisez nos coordonnées bancaires :\nIBAN : BJ66 BJ06 2010 2111 1190 0190 0179 (ECOBANK)\nSWIFT : ECOCBJBJ\nTitulaire : ONG LA VOIX DES VISIONNAIRES INTERNATIONALE\nChaque euro change une vie. 🌟",
  contact:
    "📧 contact@vvi-ong.org\n📞 (+229) 00 00 00 00\n📍 Zinvié, Abomey-Calavi, Bénin\nNous répondons en 24h.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Scroll automatique vers le bas des messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (text: string, sender: "bot" | "user") => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleSend = (text?: string) => {
    const question = (text || input).trim();
    if (!question) return;

    addMessage(question, "user");
    setInput("");

    const lower = question.toLowerCase();
    const answer =
      Object.entries(faq).find(([key]) => lower.includes(key))?.[1] ??
      "Merci pour votre message ! Nous vous répondrons en détail à contact@vvi-ong.org. Ensemble, changeons des vies. 💚";

    addMessage(answer, "bot");
  };

  // Message de bienvenue automatique
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage(
        "Bonjour ! Je suis VVI Assistance. Posez-moi vos questions sur notre ONG, nos actions ou comment nous aider. ✨",
        "bot"
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Bouton flottant (toujours visible, safe-area en bas) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        aria-label="Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div
          className="fixed z-50 flex flex-col bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden"
          style={{
            bottom: "calc(1rem + env(safe-area-inset-bottom, 0px) + 70px)",
            right: "1rem",
            width: "calc(100vw - 2rem)",
            maxWidth: "400px",
            height: "min(500px, 70vh)",
          }}
        >
          {/* En-tête (toujours visible) */}
          <div className="shrink-0 bg-primary text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-secondary" />
              <span className="font-display font-bold">VVI Assistance</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

          {/* Corps des messages (scrollable) */}
          <div
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-off-white"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-primary/10 rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Questions rapides (footer, non scrollable) */}
          <div className="shrink-0 px-4 py-3 border-t border-primary/10 flex flex-wrap gap-2 bg-white">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-primary-light text-primary font-medium px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Saisie + envoi (footer, non scrollable) */}
          <div className="shrink-0 border-t border-primary/10 px-4 py-3 flex items-center gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Écrivez votre question..."
              className="flex-1 text-sm border border-primary/20 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              onClick={() => handleSend()}
              className="bg-secondary text-primary-dark p-2 rounded-full hover:bg-secondary-dark transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}