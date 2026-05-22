"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ShieldCheck, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navbar({ dict, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dict.navigation.home, href: `/${lang}` },
    { name: dict.navigation.services, href: `/${lang}/services` },
    { name: dict.navigation.about, href: `/${lang}/a-propos` },
    { name: dict.navigation.careers, href: `/${lang}/carrieres` },
  ];

  const toggleLanguage = () => {
    const nextLang = lang === 'fr' ? 'en' : 'fr';
    const newPath = pathname.replace(`/${lang}`, `/${nextLang}`);
    window.location.href = newPath || `/${nextLang}`;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="MDS Logo" 
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary-600)] dark:hover:text-[var(--color-primary-500)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-[var(--color-primary-600)] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <Link href={`/${lang}/contact`}>
              <Button variant="primary" size="sm">
                {dict.navigation.quote}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-[#0f172a] border-t border-slate-100 dark:border-slate-800"
        >
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <Globe className="w-5 h-5" />
              {lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
            </button>
            <Link href={`/${lang}/contact`} onClick={() => setIsOpen(false)} className="px-3 pt-2">
              <Button variant="primary" className="w-full">
                {dict.navigation.quote}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
