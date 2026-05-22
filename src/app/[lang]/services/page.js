"use client";

import { Section } from "@/components/ui/Section";
import { Globe, Cloud, ShieldCheck, Code, Server, LineChart } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "consulting",
      icon: <Globe className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "IT Consulting & Stratégie",
      desc: "Fort de notre expertise et de notre réputation, nous accompagnons les organisations dans leur transformation numérique pour une meilleure agilité métier.",
      bullets: [
        "Audit des processus métiers",
        "Conduite et management du changement",
        "Conseil technologique et stratégique",
        "Externalisation de la R&D"
      ]
    },
    {
      id: "cloud",
      icon: <Cloud className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Solutions Cloud Digitales",
      desc: "Nous développons des solutions facilement accessibles qui respectent la sécurité et la souveraineté de vos données.",
      bullets: [
        "Infrastructure as a Service (IaaS) : Centre de données virtuel décentralisé.",
        "Platform as a Service (PaaS) : Environnements virtuels flexibles.",
        "Software as a Service (SaaS) : Messagerie, sauvegardes clients et monitoring.",
        "Mise en place de Cloud Privé et Hybride"
      ]
    },
    {
      id: "outsourcing",
      icon: <ShieldCheck className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "IT Outsourcing & Infogérance",
      desc: "MDS propose la gestion de systèmes sous haute performance afin que vous puissiez vous concentrer sur votre cœur de métier.",
      bullets: [
        "Maintenance régulière du matériel informatique (Serveurs, Réseaux, Poste de travail)",
        "Sécurisation des systèmes d'information",
        "Infogérance applicative et gestion des fournisseurs",
        "Assistance technique (N1/N2/N3) et staffing IT"
      ]
    },
    {
      id: "integration",
      icon: <Code className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Conception & Intégration",
      desc: "Développement d'applications cross-platform économiques et qualitatives, indépendantes du système d'exploitation.",
      bullets: [
        "Architecture globale des systèmes d'information",
        "Développement applicatif et génie logiciel",
        "Déploiement et intégration d'ERP/PGI",
        "Applications mobiles multiplateformes"
      ]
    },
    {
      id: "datacenter",
      icon: <Server className="w-12 h-12 text-[var(--color-primary-500)]" />,
      title: "Transformation Data Center",
      desc: "De la planification initiale à l'exécution finale, nous apportons une approche unique à l'initiative de transformation de vos centres de données.",
      bullets: [
        "Audit des infrastructures existantes",
        "Modernisation des équipements à la pointe de la technologie",
        "Virtualisation et consolidation des serveurs",
        "Assistance et maintien en conditions opérationnelles"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Catalogue de Services</h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Nous disposons en interne de toutes les compétences pour accompagner nos partenaires et clients avec une excellente maîtrise des enjeux technologiques de bout en bout.
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
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                      <span className="w-2 h-2 mt-2 shrink-0 rounded-full bg-[var(--color-primary-500)]"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
