"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronUp } from "lucide-react";

// Questions rapides pré-remplies
const quickQuestions = [
  "Qui êtes-vous ?",
  "Quelle est votre vision ?",
  "Quels sont vos objectifs ?",
  "Où agissez-vous ?",
  "Comment puis-je aider ?",
  "Comment faire un don ?",
  "Contact",
];

// Base de réponses percutantes, alignées sur la vision VVI
const faq: Record<string, string> = {
  "qui êtes-vous": 
    "Nous sommes l'ONG **Vision et Volonté d'Impact (VVI)**, une organisation béninoise née en 2020. Notre mission est de transformer des vies : autonomisation des femmes et des filles-mères, éducation, santé et soutien aux orphelins. Nous sommes la voix des sans-voix et la force des sans-force.",
  
  "quelle est votre vision": 
    "Notre vision est d'être **le plus grand accélérateur de développement communautaire en Afrique**. Nous voulons que chaque femme devienne leader de sa propre vie, que chaque enfant orphelin trouve un chemin vers l'avenir, et que chaque communauté vulnérable retrouve espoir et dignité.",
  
  "quels sont vos objectifs":
    "Nous visons trois piliers : ① **Autonomiser financièrement les femmes** par la formation et l'entrepreneuriat. ② **Améliorer la santé et le bien-être** des filles-mères et des enfants. ③ **Accompagner les orphelins** jusqu'à leur insertion professionnelle. Chaque action est conçue pour un impact durable.",
  
  "où agissez-vous":
    "Notre base est à Zinvié (Abomey-Calavi), mais notre ambition est nationale et panafricaine. Aujourd'hui nous intervenons dans plusieurs villages du Bénin. Demain, nous rêvons d'étendre notre méthode éprouvée à toute l'Afrique. Là où il y a une femme vulnérable, un enfant abandonné, VVI peut agir.",
  
  "comment puis-je aider":
    "Votre soutien peut prendre plusieurs formes : un don (même modeste), du bénévolat sur le terrain, un partenariat institutionnel, ou simplement partager notre message autour de vous. **Chaque geste compte** pour que le sourire d'un enfant ou l'autonomie d'une femme devienne réalité. 💪🏾",
  
  "comment faire un don":
    "C'est simple et sécurisé ! Rendez-vous sur notre page **Faire un don** (en haut du site) ou effectuez un virement bancaire directement :\nIBAN : BJ66 BJ06 2010 2111 1190 0190 0179 (ECOBANK)\nCode SWIFT : ECOCBJBJ\nTitulaire : ONG LA VOIX DES VISIONNAIRES INTERNATIONALE\nChaque euro est un pas vers une vie transformée. 🌟",
  
  "contact":
    "📧 Email : contact@vvi-ong.org\n📞 Téléphone : (+229) 00 00 00 00 (ligne dédiée donateurs)\n📍 Siège : Zinvié, Abomey-Calavi, Bénin\n\nNous répondons en moins de 24 heures. Votre voix compte, écrivez-nous !",
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

    // Recherche de réponse pertinente avec correspondance partielle
    const lowerQuestion = question.toLowerCase();
    const matchedEntry = Object.entries(faq).find(([key]) =>
      lowerQuestion.includes(key)
    );

    const answer = matchedEntry
      ? matchedEntry[1]
      : "Merci pour votre message ! Notre équipe prendra le temps de vous répondre en détail. En attendant, écrivez-nous à contact@vvi-ong.org. Ensemble, changeons des vies. 💚";

    addMessage(answer, "bot");
  };

  // Message de bienvenue automatique lorsque le chat s'ouvre pour la première fois
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addMessage(
        "Bonjour ! Je suis VVI Assistance, votre assistant intelligent. Posez-moi n'importe quelle question sur notre ONG, nos actions ou comment nous aider. Je suis là pour vous guider ✨",
        "bot"
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
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
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

          {/* Corps des messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto max-h-80 bg-off-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
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

          {/* Questions rapides */}
          <div className="px-4 py-3 border-t border-primary/10 flex flex-wrap gap-2 bg-white">
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