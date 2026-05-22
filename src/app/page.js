"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cloud, Server, ShieldCheck, Database, Code, LineChart, Globe, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1120]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary-600)]/20 text-[var(--color-primary-500)] text-sm font-semibold mb-6 border border-[var(--color-primary-500)]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary-500)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary-500)]"></span>
              </span>
              Ingénierie & Conseil IT Global
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              L'excellence technologique au service de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-500)] to-cyan-400">transformation digitale</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              MDS est une société d'ingénierie informatique spécialisée dans le développement de solutions, l'intégration de systèmes complexes et l'infogérance d'infrastructures à l'échelle internationale.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-[var(--color-primary-600)]/30">
                  Découvrir nos solutions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20">
                  Nous contacter
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <Section bg="white" id="solutions">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nos Solutions Expertes</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Nous maîtrisons l'ensemble de la chaîne de valeur IT pour vous accompagner de bout en bout, de la stratégie à l'exploitation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "IT Consulting",
              desc: "Accompagnement stratégique des organisations privées et publiques. Nous optimisons vos processus métiers et pilotons votre transformation numérique globale.",
              href: "/services#consulting"
            },
            {
              icon: <Cloud className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Solutions Cloud",
              desc: "Déploiement d'environnements virtualisés (IaaS, PaaS, SaaS). Nous concevons des architectures cloud hybrides, sécurisées et hautement disponibles.",
              href: "/services#cloud"
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "IT Outsourcing",
              desc: "Délégation complète de la gestion de votre SI. Maintenance préventive, assistance technique continue (SLA) et infogérance de votre parc applicatif et matériel.",
              href: "/services#outsourcing"
            },
            {
              icon: <Code className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Conception & Intégration",
              desc: "Architecture des systèmes d'information, développement d'applications cross-platform sur mesure et intégration de progiciels (ERP/PGI).",
              href: "/services#integration"
            },
            {
              icon: <Server className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Transformation Data Center",
              desc: "De la planification à l'exécution, nous modernisons vos centres de données pour garantir une infrastructure résiliente, évolutive et performante.",
              href: "/services#datacenter"
            },
            {
              icon: <LineChart className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Market Data",
              desc: "Solutions spécialisées pour le secteur financier. Gestion experte des données de marché, intégration de flux boursiers et développement d'applications ad hoc.",
              href: "/services#market-data"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-[var(--color-primary-500)]/50 transition-colors group flex flex-col h-full"
            >
              <div className="bg-white dark:bg-[#1e293b] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform shrink-0">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{service.desc}</p>
              <Link href={service.href} className="inline-flex items-center text-[var(--color-primary-600)] font-medium hover:text-[var(--color-primary-500)] mt-auto">
                En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pourquoi Nous (About) */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)] dark:text-[var(--color-primary-500)] text-sm font-semibold mb-4">
              Notre Différence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              L'alliance de l'innovation et de <span className="text-[var(--color-primary-600)]">l'excellence opérationnelle</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              MDS s'impose comme un acteur de référence grâce à une maîtrise complète des enjeux end-to-end de l'informatique d'entreprise. Nous intégrons les meilleures briques technologiques du marché pour bâtir des socles solides.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              L'expertise de nos collaborateurs et de notre réseau de partenaires nous permet d'intervenir à l'échelle internationale avec un niveau de qualité de service (SLA) irréprochable.
            </p>
            
            <div className="space-y-5">
              {[
                { icon: <Globe className="text-[var(--color-primary-500)] w-6 h-6" />, title: "Présence Internationale", desc: "Un réseau de partenaires solides pour vous accompagner par-delà les frontières." },
                { icon: <Zap className="text-[var(--color-primary-500)] w-6 h-6" />, title: "Optimisation des Performances", desc: "Des architectures conçues pour la vitesse, la scalabilité et la résilience." },
                { icon: <Cpu className="text-[var(--color-primary-500)] w-6 h-6" />, title: "Innovation Continue", desc: "La maîtrise technologique au cœur de notre ADN et de nos recommandations." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-white dark:bg-[#1e293b] p-2 rounded-lg shadow-sm border border-slate-100 dark:border-slate-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                alt="Infrastructure et équipe IT" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                  <div className="text-3xl font-bold text-[var(--color-primary-500)] mb-1">Un ROI optimal</div>
                  <div className="text-sm text-slate-300">Nous nous engageons à offrir le meilleur rapport qualité-prix sur l'ensemble de nos intégrations systèmes.</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-primary-600)] rounded-full blur-3xl opacity-20 -z-0"></div>
          </div>
        </div>
      </Section>

      {/* Processus de collaboration (Adapté LkTec / Outsourcing) */}
      <Section bg="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Méthodologie & Accompagnement</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Nous proposons un rôle opérationnel de bout en bout, de l'avant-vente à la formation de vos équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Avant-vente & Étude", desc: "Analyse du marché, évaluation des besoins et définition de l'architecture cible." },
            { num: "02", title: "Intégration", desc: "Déploiement des briques technologiques, du cloud et des systèmes applicatifs." },
            { num: "03", title: "Outsourcing & Support", desc: "Maintien en conditions opérationnelles (MCO), gestion du parc et infogérance." },
            { num: "04", title: "Formation & Transfert", desc: "Développement des compétences, polyvalence et accompagnement au changement." }
          ].map((step, i) => (
            <div key={i} className="relative p-8 bg-slate-50 dark:bg-[#0f172a] rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="absolute top-6 right-6 text-5xl font-black text-slate-200 dark:text-slate-800/50">{step.num}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 mt-8 relative z-10">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-600)] to-[#0f172a] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Passez à la vitesse supérieure
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Que ce soit pour externaliser votre infrastructure, migrer vers le cloud ou développer des applications sur-mesure, MDS est votre partenaire de confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8">
                Initier un projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
