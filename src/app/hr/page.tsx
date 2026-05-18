import { AppShell } from "@/components/app-shell";

const employees = [
  ["ALS-EMP-0001", "Maya", "Manager", "Active", "1 240 000 FCFA"],
  ["ALS-EMP-0002", "Chris", "Caissier", "Active", "780 000 FCFA"],
  ["ALS-EMP-0003", "Ariel", "Serveur", "Active", "620 000 FCFA"],
  ["ALS-EMP-0004", "Nadia", "Barman", "Active", "710 000 FCFA"]
];

export default function HrPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <p className="text-sm text-gold">Ressources humaines</p>
        <h1 className="mt-2 text-4xl font-black text-white">Employés, rôles et émargement</h1>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.7fr]">
          <div className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold">Équipe</h2>
            <div className="mt-5 space-y-3">
              {employees.map(([ref, name, role, status, ca]) => (
                <div key={ref} className="grid grid-cols-[1fr_0.7fr_0.5fr] gap-3 rounded-lg bg-white/[0.04] p-4 text-sm">
                  <div><strong className="block">{name}</strong><span className="text-white/45">{ref}</span></div>
                  <span>{role}</span>
                  <span className="text-right text-emerald-200">{status}</span>
                  <span className="col-span-3 text-gold">CA généré : {ca}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold">Pointage rapide</h2>
            <div className="mt-6 rounded-lg border border-dashed border-gold/40 p-8 text-center">
              <p className="text-white/65">QR employé ou PIN sécurisé</p>
              <button className="mt-5 rounded-lg bg-gold px-5 py-3 font-bold text-night">Pointer entrée</button>
              <button className="mt-3 block w-full rounded-lg border border-white/15 px-5 py-3">Pointer sortie</button>
            </div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
