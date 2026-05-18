import { AppShell } from "@/components/app-shell";
import { products } from "@/lib/catalog";
import { money } from "@/lib/format";

function stockState(stock: number, alert: number, critical: number) {
  if (stock === 0) return ["Rupture", "text-red-200 bg-red-500/15"];
  if (stock <= critical) return ["Critique", "text-red-100 bg-red-500/15"];
  if (stock <= alert) return ["Faible", "text-gold bg-gold/15"];
  return ["Normal", "text-emerald-100 bg-emerald-500/15"];
}

export default function StockPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <div>
          <p className="text-sm text-gold">Stock</p>
          <h1 className="mt-2 text-4xl font-black text-white">Inventaire et alertes</h1>
        </div>
        <div className="glass mt-8 overflow-hidden rounded-lg">
          <div className="grid grid-cols-[1.2fr_0.7fr_0.6fr_0.6fr] gap-3 border-b border-white/10 p-4 text-xs uppercase text-white/48">
            <span>Produit</span><span>Catégorie</span><span>Stock</span><span>État</span>
          </div>
          {products.slice(0, 28).map((product) => {
            const [label, className] = stockState(product.stock, product.alertThreshold, product.criticalThreshold);
            return (
              <div key={product.sku} className="grid grid-cols-[1.2fr_0.7fr_0.6fr_0.6fr] gap-3 border-b border-white/5 p-4 text-sm">
                <div>
                  <strong className="block text-white">{product.name}</strong>
                  <span className="text-white/45">{product.sku} · Achat {money(product.purchasePrice)}</span>
                </div>
                <span className="text-white/65">{product.category}</span>
                <span className="font-bold text-white">{product.stock}</span>
                <span className={`w-fit rounded px-2 py-1 text-xs font-bold ${className}`}>{label}</span>
              </div>
            );
          })}
        </div>
      </section>
    </AppShell>
  );
}
