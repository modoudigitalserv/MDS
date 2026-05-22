import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[var(--color-primary-600)] p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                MDS
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              Votre partenaire stratégique en services IT & support informatique. 
              Des solutions performantes respectant vos SLA les plus exigeants.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services#consulting" className="hover:text-[var(--color-primary-500)] transition-colors">Consulting IT</Link></li>
              <li><Link href="/services#support" className="hover:text-[var(--color-primary-500)] transition-colors">Support Informatique</Link></li>
              <li><Link href="/services#placement" className="hover:text-[var(--color-primary-500)] transition-colors">Placement IT Support</Link></li>
              <li><Link href="/services#cloud" className="hover:text-[var(--color-primary-500)] transition-colors">Cloud & Infrastructure</Link></li>
              <li><Link href="/services#cyber" className="hover:text-[var(--color-primary-500)] transition-colors">Cybersécurité</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">L'Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/a-propos" className="hover:text-[var(--color-primary-500)] transition-colors">À propos de MDS</Link></li>
              <li><Link href="/carrieres" className="hover:text-[var(--color-primary-500)] transition-colors">Carrières & Recrutement</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-primary-500)] transition-colors">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-[var(--color-primary-500)] transition-colors">Mentions légales</Link></li>
              <li><Link href="/confidentialite" className="hover:text-[var(--color-primary-500)] transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                <span>123 Avenue de l'Innovation, 75001 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                <span>contact@mds-consulting.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Modou Digital Services SARLAU. Tous droits réservés.</p>
          <p>Créé avec passion par MDS.</p>
        </div>
      </div>
    </footer>
  );
}
