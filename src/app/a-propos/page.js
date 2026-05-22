"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de MDS</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          MDS est une société d'ingénierie informatique spécialisée dans le développement de solutions, l'implémentation et le support des systèmes d'information.
        </p>
      </Section>
      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Notre Vision & Notre Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Nous intégrons des briques technologiques innovantes, des services sur mesure, du conseil stratégique ainsi que des analyses de marché poussées. Les technologies font partie intégrante de notre esprit d'entreprise.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            L'expérience conjuguée de l'ensemble de nos collaborateurs et de nos partenaires dans le domaine des systèmes d'information nous permet d'être présents à l'international, en garantissant un niveau de qualité de service optimal et le meilleur rapport qualité-prix.
          </p>
          
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Le Fondateur</h3>
          <div className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-xl border border-slate-100 dark:border-slate-800 mb-12">
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              MDS a été fondée par <a href="https://www.linkedin.com/in/modou-gueye-525664127/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-600)] font-semibold hover:underline">Modou Gueye</a>, un expert Senior passionné par l'innovation technologique.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Fort d'une solide expérience en ingénierie Cloud, DevOps, Cybersécurité et architecture SaaS scalable, Modou a créé MDS avec la volonté de mettre cette double expertise technique et stratégique au service des entreprises. Son parcours allie la conception de solutions sur-mesure (React, Next.js, infrastructures AWS/Azure) à une vision orientée résultats (ROI, optimisation des performances) pour garantir des déploiements fiables et sécurisés à l'échelle internationale.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 mt-12">Nos engagements fondamentaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Optimisation continue des performances",
              "Maîtrise de bout en bout des enjeux IT",
              "Transfert de compétences et formation",
              "Présence et support à l'international"
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
