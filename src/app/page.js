"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, Headphones, Users, CheckCircle, Clock, Zap, Target } from "lucide-react";
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
              Support IT Excellence
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Votre partenaire stratégique en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-500)] to-cyan-400">services IT & support informatique</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
              MDS accompagne les entreprises avec des solutions IT performantes, du support technique réactif et des équipes qualifiées respectant vos SLA les plus exigeants.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-[var(--color-primary-600)]/30">
                  Demander un devis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20">
                  Planifier un appel
                </Button>
              </Link>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-8">
              {[
                { label: "SLA respectés", value: "99%" },
                { label: "Support", value: "24/7" },
                { label: "Consultants", value: "Certifiés" },
                { label: "Temps de réponse", value: "< 15min" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <Section bg="white" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Nos Domaines d'Expertise</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Des solutions complètes pour répondre à tous vos besoins technologiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Target className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Consulting IT",
              desc: "Transformation digitale, Audit IT, Conseil infrastructure et Optimisation des systèmes.",
              href: "/services#consulting"
            },
            {
              icon: <Headphones className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Support Informatique",
              desc: "Support N1/N2/N3, Helpdesk externalisé, Gestion des incidents et Maintenance préventive.",
              href: "/services#support"
            },
            {
              icon: <Users className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Placement IT Support",
              desc: "Mise à disposition de techniciens, Staffing helpdesk et Consultants sur site ou remote.",
              href: "/services#placement"
            },
            {
              icon: <Clock className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Gestion SLA",
              desc: "Respect des engagements, KPIs et reporting, Monitoring continu et Escalade rapide.",
              href: "/services#sla"
            },
            {
              icon: <Shield className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Cybersécurité",
              desc: "Protection des infrastructures, Gestion des accès, Sécurité réseau et Sensibilisation.",
              href: "/services#cyber"
            },
            {
              icon: <Server className="w-8 h-8 text-[var(--color-primary-500)]" />,
              title: "Cloud & Infrastructure",
              desc: "Migration cloud, Administration serveurs, Virtualisation et Monitoring systèmes.",
              href: "/services#cloud"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="bg-slate-50 dark:bg-[#0f172a] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-[var(--color-primary-500)]/50 transition-colors group"
            >
              <div className="bg-white dark:bg-[#1e293b] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{service.desc}</p>
              <Link href={service.href} className="inline-flex items-center text-[var(--color-primary-600)] font-medium hover:text-[var(--color-primary-500)]">
                En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pourquoi Choisir MDS */}
      <Section bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Pourquoi choisir <span className="text-[var(--color-primary-600)]">MDS</span> pour votre IT ?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Nous combinons expertise technique et excellence opérationnelle pour garantir la disponibilité et la performance de votre système d'information.
            </p>
            
            <div className="space-y-4">
              {[
                "Expertise IT éprouvée et certifiée",
                "Réactivité et disponibilité 24/7",
                "Respect strict des SLA garantis",
                "Approche orientée résultats et satisfaction",
                "Accompagnement personnalisé et évolutif"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[var(--color-primary-500)] shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#0f172a] p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                <div className="text-3xl font-bold text-[var(--color-primary-600)] mb-1">+100</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Projets IT réussis</div>
              </div>
              <div className="bg-white dark:bg-[#0f172a] p-6 rounded-xl border border-slate-100 dark:border-slate-800 text-center shadow-sm">
                <div className="text-3xl font-bold text-[var(--color-primary-600)] mb-1">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction client</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Équipe IT MDS au travail" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[var(--color-primary-600)] rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-slate-200 dark:bg-slate-800 rounded-full -z-0"></div>
          </div>
        </div>
      </Section>

      {/* Processus de collaboration */}
      <Section bg="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Notre Processus</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de votre infogérance.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Ligne de connexion (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: "01", title: "Analyse", desc: "Étude approfondie de vos besoins." },
              { num: "02", title: "Audit", desc: "Évaluation de l'existant." },
              { num: "03", title: "Déploiement", desc: "Mise en place des ressources." },
              { num: "04", title: "Monitoring", desc: "Suivi continu et SLA." },
              { num: "05", title: "Optimisation", desc: "Amélioration continue." }
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-white dark:bg-[#0f172a] rounded-full border-4 border-slate-50 dark:border-[#0B1120] shadow-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[var(--color-primary-600)]">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-primary-600)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Prêt à optimiser votre infrastructure IT ?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Contactez nos experts pour une évaluation gratuite de vos besoins en support et infogérance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[var(--color-primary-600)] hover:bg-slate-100">
                Contactez-nous
              </Button>
            </Link>
            <Link href="/carrieres">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                Nous recrutons
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
