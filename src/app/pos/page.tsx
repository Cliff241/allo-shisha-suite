import { AppShell } from "@/components/app-shell";
import { OrderCard } from "@/components/order-card";
import type { OrderStatus } from "@/lib/types";
import { orders } from "@/lib/orders";

const columns: { status: OrderStatus; title: string }[] = [
  { status: "pending", title: "En attente" },
  { status: "accepted", title: "Acceptées" },
  { status: "preparing", title: "Préparation" },
  { status: "served", title: "Servies" },
  { status: "paid", title: "Payées" }
];

export default function PosPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm text-gold">POS / Caisse</p>
            <h1 className="mt-2 text-4xl font-black text-white">Commandes et clôture caisse</h1>
          </div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-white/15 px-4 py-3 text-sm text-white">Imprimer tickets</button>
            <button className="rounded-lg bg-gold px-4 py-3 text-sm font-bold text-night">Clôturer caisse</button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-5">
          {columns.map((column) => (
            <section key={column.status} className="glass min-h-[420px] rounded-lg p-4">
              <h2 className="mb-4 text-sm font-bold uppercase text-white/65">{column.title}</h2>
              <div className="space-y-3">
                {orders.filter((order) => order.status === column.status).map((order) => <OrderCard key={order.id} order={order} />)}
              </div>
            </section>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
