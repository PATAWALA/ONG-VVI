"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronUp } from "lucide-react";

// Questions rapides pré-remplies
const quickQuestions = [
  "Qui êtes-vous ?",
  "Comment puis-je aider ?",
  "Où agissez-vous ?",
  "Comment faire un don ?",
  "Contact",
];

// Base de réponses pré-enregistrées (FAQ)
const faq: Record<string, string> = {
  "qui êtes-vous": "Nous sommes l'ONG VVI (Vision et Volonté d'Impact), basée au Bénin. Nous autonomisons les femmes et les filles-mères, et soutenons les enfants orphelins.",
  "comment puis-je aider": "Vous pouvez faire un don, devenir bénévole ou simplement parler de nous autour de vous. Cliquez sur 'Faire un don' dans le menu !",
  "où agissez-vous": "Nous intervenons principalement à Zinvié, dans la commune d'Abomey-Calavi, au Bénin.",
  "comment faire un don": "C'est simple ! Rendez-vous sur notre page 'Faire un don' ou utilisez notre IBAN : BJ66 BJ06 2010 2111 1190 0190 0179 (Ecobank).",
  "contact": "Écrivez-nous à contact@vvi-ong.org ou appelez-nous au (+229) 00 00 00 00.",
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automatique vers le bas
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

    // Chercher une réponse pertinente
    const lowerQuestion = question.toLowerCase();
    let answer =
      Object.entries(faq).find(([key]) => lowerQuestion.includes(key))?.[1] ??
      "Merci pour votre message ! En attendant une réponse personnalisée, vous pouvez nous écrire à contact@vvi-ong.org. Nous revenons vers vous rapidement. 💚";

    // Réponse avec une petite touche humaine
    addMessage(answer, "bot");
  };

  return (
    <>
      {/* Bouton flottant (fixe en bas à droite) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
        aria-label="Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-primary/10 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* En-tête */}
          <div className="bg-primary text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-secondary" />
              <span className="font-display font-bold">VVI Assistance</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

          {/* Corps des messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80 bg-off-white">
            {messages.length === 0 && (
              <div className="text-gray-muted text-sm">Bonjour ! Posez-moi une question sur l'ONG VVI.</div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-primary/10 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Boutons de questions rapides */}
          <div className="px-4 py-3 border-t border-primary/10 flex flex-wrap gap-2 bg-white">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-primary-light text-primary font-medium px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Saisie + envoi */}
          <div className="border-t border-primary/10 px-4 py-3 flex items-center gap-2 bg-white">
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