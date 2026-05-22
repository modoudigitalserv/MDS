"use client";

import { Section } from "@/components/ui/Section";
import { Target, Headphones, Users, Clock, Shield, Server } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "consulting",
      icon: <Target className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Consulting IT",
      desc: "Accompagnement stratégique pour votre transformation digitale."
    },
    {
      id: "support",
      icon: <Headphones className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Support Informatique",
      desc: "Assistance technique multi-niveaux (N1/N2/N3) avec helpdesk dédié."
    },
    {
      id: "placement",
      icon: <Users className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Placement IT Support",
      desc: "Mise à disposition de ressources techniques qualifiées."
    },
    {
      id: "sla",
      icon: <Clock className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Gestion SLA",
      desc: "Garantie de disponibilité et respect des engagements de service."
    },
    {
      id: "cyber",
      icon: <Shield className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Cybersécurité",
      desc: "Protection de vos données et sécurisation de vos infrastructures."
    },
    {
      id: "cloud",
      icon: <Server className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Cloud & Infrastructure",
      desc: "Hébergement, migration et infogérance de serveurs."
    }
  ];

  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services IT</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Découvrez notre catalogue complet de prestations pour optimiser, sécuriser et maintenir votre système d'information.
        </p>
      </Section>
      
      <Section bg="white">
        <div className="space-y-24">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 rounded-full bg-slate-50 dark:bg-[#0f172a] border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-2xl relative">
                  {service.icon}
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">{service.desc}</p>
                <ul className="space-y-3 inline-block text-left">
                  <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></span>
                    Audit et diagnostic
                  </li>
                  <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></span>
                    Accompagnement sur-mesure
                  </li>
                  <li className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary-500)]"></span>
                    Monitoring continu
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
