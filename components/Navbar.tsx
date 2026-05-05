"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-pure-white/90 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-pure-white" />
            </div>
            <span className="text-xl font-bold text-primary font-display">
              VVI
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/notre-action" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Notre action
            </Link>
            <Link href="/impact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Impact
            </Link>
            <Link href="/actualites" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Actualités
            </Link>
            <Link href="/rapports" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Rapports
            </Link>
            <Link
              href="/faire-un-don"
              className="bg-secondary text-primary-dark px-5 py-2.5 rounded-full font-semibold hover:bg-secondary-dark transition-all shadow hover:shadow-md"
            >
              Faire un don
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-pure-white border-t border-primary/10 animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-4">
            <Link href="/notre-action" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Notre action
            </Link>
            <Link href="/impact" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Impact
            </Link>
            <Link href="/actualites" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Actualités
            </Link>
            <Link href="/rapports" className="block text-gray-700 font-medium" onClick={() => setIsOpen(false)}>
              Rapports
            </Link>
            <Link
              href="/faire-un-don"
              className="block w-fit bg-secondary text-primary-dark px-6 py-2.5 rounded-full font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Faire un don
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;