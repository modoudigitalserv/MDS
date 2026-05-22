import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer({ dict, lang }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${lang}`} className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="MDS Logo" 
                className="h-12 w-12 rounded-full object-cover shadow-sm transition-transform group-hover:scale-105" 
              />
              <span className="font-bold text-2xl tracking-tight text-white">
                M.D.S
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 max-w-xs">
              {dict.footer.brandDesc}
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
            <h3 className="text-white font-semibold mb-4">{dict.footer.solutions}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href={`/${lang}/services#consulting`} className="hover:text-[var(--color-primary-500)] transition-colors">IT Consulting & Stratégie</Link></li>
              <li><Link href={`/${lang}/services#cloud`} className="hover:text-[var(--color-primary-500)] transition-colors">Solutions Cloud Digitales</Link></li>
              <li><Link href={`/${lang}/services#outsourcing`} className="hover:text-[var(--color-primary-500)] transition-colors">IT Outsourcing & Infogérance</Link></li>
              <li><Link href={`/${lang}/services#integration`} className="hover:text-[var(--color-primary-500)] transition-colors">Conception & Intégration</Link></li>
              <li><Link href={`/${lang}/services#datacenter`} className="hover:text-[var(--color-primary-500)] transition-colors">Transformation Data Center</Link></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dict.footer.company}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href={`/${lang}/a-propos`} className="hover:text-[var(--color-primary-500)] transition-colors">{dict.navigation.about}</Link></li>
              <li><Link href={`/${lang}/carrieres`} className="hover:text-[var(--color-primary-500)] transition-colors">{dict.navigation.careers}</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-[var(--color-primary-500)] transition-colors">{dict.navigation.contact}</Link></li>
              <li><Link href={`/${lang}/mentions-legales`} className="hover:text-[var(--color-primary-500)] transition-colors">Mentions légales</Link></li>
              <li><Link href={`/${lang}/confidentialite`} className="hover:text-[var(--color-primary-500)] transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dict.footer.contact}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary-500)] shrink-0 mt-1" />
                <span className="leading-tight">209 RUE MUSTAPHA EL MAANI<br/>ETG 4 N 5 CASABLANCA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-primary-500)] shrink-0" />
                <span>mdsconsultingcontact@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Modou Digital Services SARLAU. {dict.footer.rights}</p>
          <p>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}
