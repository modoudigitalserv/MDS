"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Besoin d'un accompagnement IT, d'un support dédié ou de conseils ? Notre équipe est à votre disposition.
        </p>
      </Section>
      
      <Section bg="white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Parlons de votre projet IT</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10">
              Remplissez le formulaire ci-dessous et l'un de nos experts vous recontactera dans les plus brefs délais pour discuter de vos besoins.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-600)]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Adresse</h3>
                  <p className="text-slate-600 dark:text-slate-400">123 Avenue de l'Innovation, 75001 Paris, France</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-600)]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Téléphone</h3>
                  <p className="text-slate-600 dark:text-slate-400">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary-600)]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[var(--color-primary-600)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400">contact@mds-consulting.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom complet</label>
                  <input type="text" id="nom" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-shadow text-slate-900 dark:text-white" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label htmlFor="entreprise" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Entreprise</label>
                  <input type="text" id="entreprise" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-shadow text-slate-900 dark:text-white" placeholder="Votre société" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email professionnel</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-shadow text-slate-900 dark:text-white" placeholder="jean@entreprise.com" />
              </div>
              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sujet de votre demande</label>
                <select id="sujet" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-shadow text-slate-900 dark:text-white">
                  <option>Demande de devis</option>
                  <option>Support Informatique</option>
                  <option>Placement IT</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Votre message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] focus:ring-2 focus:ring-[var(--color-primary-500)] outline-none transition-shadow text-slate-900 dark:text-white" placeholder="Décrivez votre besoin..."></textarea>
              </div>
              <Button type="button" className="w-full" size="lg">Envoyer la demande</Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
