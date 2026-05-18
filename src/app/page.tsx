import { AppShell } from "@/components/app-shell";
import { MetricCard } from "@/components/metric-card";
import { OrderCard } from "@/components/order-card";
import { products } from "@/lib/catalog";
import { money, percent } from "@/lib/format";
import { orders, orderTotal } from "@/lib/orders";

export default function DashboardPage() {
  const revenue = orders.reduce((sum, order) => sum + orderTotal(order), 0);
  const cogs = orders.reduce(
    (sum, order) =>
      sum + order.items.reduce((itemSum, item) => itemSum + (products.find((product) => product.sku === item.sku)?.purchasePrice ?? 0) * item.quantity, 0),
    0
  );
  const margin = revenue > 0 ? ((revenue - cogs) / revenue) * 100 : 0;

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold">ALLÔ SHISHA Control Center</p>
            <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Pilotage lounge en temps réel</h1>
          </div>
          <a href="/qr/demo-table" className="rounded-lg bg-gold px-5 py-3 text-sm font-bold text-night">Tester une table QR</a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard label="CA du jour" value={money(revenue)} hint="+18 % vs hier" />
          <MetricCard label="Bénéfice brut estimé" value={money(revenue - cogs)} hint={`Marge ${percent(margin)}`} />
          <MetricCard label="Commandes actives" value={String(orders.length)} hint="3 tables en service" />
          <MetricCard label="Stock sensible" value="11" hint="faible, critique ou rupture" />
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <section className="glass rounded-lg p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Commandes récentes</h2>
              <span className="text-sm text-white/55">Live POS</span>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {orders.map((order) => <OrderCard key={order.id} order={order} />)}
            </div>
          </section>

          <section className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold text-white">Alertes manager</h2>
            <div className="mt-5 space-y-3 text-sm">
              <p className="rounded-lg bg-red-500/12 p-3 text-red-100">Annulation commande protégée par permission manager.</p>
              <p className="rounded-lg bg-gold/12 p-3 text-gold">Prix d'achat seedés estimés : à valider avant production.</p>
              <p className="rounded-lg bg-emerald-500/12 p-3 text-emerald-100">Facturation PDF verrouillée après paiement.</p>
            </div>
          </section>
        </div>
      </section>
    </AppShell>
  );
}
