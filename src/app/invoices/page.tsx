import { AppShell } from "@/components/app-shell";
import { BrandLogo } from "@/components/brand-logo";
import { money } from "@/lib/format";
import { orders, orderTotal } from "@/lib/orders";

export default function InvoicesPage() {
  const order = orders[1];
  return (
    <AppShell>
      <section className="mx-auto max-w-5xl pb-24">
        <p className="text-sm text-gold">Facturation</p>
        <h1 className="mt-2 text-4xl font-black text-white">PDF A4 et ticket 80mm</h1>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_320px]">
          <article className="rounded-lg bg-ivory p-8 text-night">
            <div className="flex items-start justify-between">
              <BrandLogo compact />
              <div className="text-right">
                <strong>FAC-2026-000001</strong>
                <p className="text-sm text-black/55">Payée / Table {order.table}</p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {order.items.map((item) => (
                <div key={item.sku} className="flex justify-between border-b border-black/10 pb-3">
                  <span>{item.quantity}x {item.name}</span>
                  <strong>{money(item.quantity * item.unitPrice)}</strong>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between text-xl font-black">
              <span>Total</span><span>{money(orderTotal(order))}</span>
            </div>
            <p className="mt-8 text-sm text-black/60">Merci pour votre visite chez ALLÔ SHISHA.</p>
          </article>
          <aside className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold">Actions</h2>
            <button className="mt-5 w-full rounded-lg bg-gold px-4 py-3 font-bold text-night">Générer PDF</button>
            <button className="mt-3 w-full rounded-lg border border-white/15 px-4 py-3">Imprimer ticket</button>
            <button className="mt-3 w-full rounded-lg border border-white/15 px-4 py-3">Envoyer WhatsApp</button>
          </aside>
        </div>
      </section>
    </AppShell>
  );
}
