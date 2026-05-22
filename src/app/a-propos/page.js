"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de MDS</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Notre mission : vous accompagner vers l'excellence opérationnelle grâce à des solutions IT performantes et un support de qualité.
        </p>
      </Section>
      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Notre Vision</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Chez Modou Digital Services (MDS), nous croyons fermement que l'informatique doit être un levier de croissance et non une contrainte. C'est pourquoi nous nous engageons à fournir des services d'infogérance et de consulting IT qui respectent scrupuleusement vos SLA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Excellence technique",
              "Proactivité et anticipation",
              "Transparence totale",
              "Partenariat long-terme"
            ].map((val, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 dark:bg-[#0f172a] p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                <CheckCircle className="text-[var(--color-primary-500)] w-6 h-6 shrink-0" />
                <span className="font-medium text-slate-900 dark:text-white">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
