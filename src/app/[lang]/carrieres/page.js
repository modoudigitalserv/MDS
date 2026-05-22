"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function CareersPage() {
  const jobs = [
    { title: "Technicien Support N2/N3", type: "CDI", location: "Paris / Hybride" },
    { title: "Administrateur Systèmes et Réseaux", type: "CDI", location: "Remote" },
    { title: "Consultant Cloud Azure/AWS", type: "CDI", location: "Paris" },
  ];

  return (
    <div className="pt-20">
      <Section bg="dark" className="py-24 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Rejoignez l'équipe MDS</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Nous sommes toujours à la recherche de nouveaux talents IT pour accompagner nos clients.
        </p>
      </Section>
      <Section bg="gray">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white dark:bg-[#0f172a] p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm hover:border-[var(--color-primary-500)]/50 transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-slate-500">
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <Button>Postuler</Button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-[var(--color-primary-600)] p-8 rounded-2xl text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Candidature Spontanée</h2>
            <p className="mb-6">Vous ne trouvez pas d'offre qui vous correspond ? Envoyez-nous votre CV.</p>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">Envoyer mon CV</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
