import { AppShell } from "@/components/app-shell";
import { MetricCard } from "@/components/metric-card";
import { products } from "@/lib/catalog";
import { money, percent } from "@/lib/format";
import { orders, orderTotal } from "@/lib/orders";

export default function FinancePage() {
  const revenue = orders.reduce((sum, order) => sum + orderTotal(order), 0);
  const cogs = orders.reduce(
    (sum, order) => sum + order.items.reduce((itemSum, item) => itemSum + (products.find((product) => product.sku === item.sku)?.purchasePrice ?? 0) * item.quantity, 0),
    0
  );
  const expenses = 650000;
  const net = revenue - cogs - expenses;
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <p className="text-sm text-gold">Finance</p>
        <h1 className="mt-2 text-4xl font-black text-white">Rentabilité, charges et marges</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <MetricCard label="Chiffre d'affaires" value={money(revenue)} hint="Aujourd'hui" />
          <MetricCard label="Coût produits vendus" value={money(cogs)} hint="COGS" />
          <MetricCard label="Charges estimées" value={money(expenses)} hint="Fixes + variables" />
          <MetricCard label="Marge nette" value={percent(revenue ? (net / revenue) * 100 : 0)} hint={money(net)} />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold">Charges fixes</h2>
            {["Loyer", "Salaires", "Internet", "Sécurité", "Électricité", "Marketing"].map((item) => (
              <div key={item} className="mt-3 flex justify-between rounded-lg bg-white/[0.04] p-3 text-sm">
                <span>{item}</span><strong>{money(item === "Salaires" ? 320000 : 55000)}</strong>
              </div>
            ))}
          </div>
          <div className="glass rounded-lg p-5">
            <h2 className="text-xl font-bold">Charges variables</h2>
            {["Achats boissons", "Charbon", "Fruits", "Menthe", "Livraison", "Casse"].map((item) => (
              <div key={item} className="mt-3 flex justify-between rounded-lg bg-white/[0.04] p-3 text-sm">
                <span>{item}</span><strong>{money(item === "Achats boissons" ? 180000 : 15000)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
