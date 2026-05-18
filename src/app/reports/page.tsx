import { AppShell } from "@/components/app-shell";
import { products } from "@/lib/catalog";
import { money } from "@/lib/format";

export default function ReportsPage() {
  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        <p className="text-sm text-gold">Reporting</p>
        <h1 className="mt-2 text-4xl font-black text-white">Top produits et exports</h1>
        <div className="glass mt-8 rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Produits les plus rentables</h2>
            <div className="flex gap-2">
              <button className="rounded-lg border border-white/15 px-4 py-2 text-sm">CSV</button>
              <button className="rounded-lg bg-gold px-4 py-2 text-sm font-bold text-night">PDF</button>
            </div>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {products.slice(0, 10).map((product) => (
              <div key={product.sku} className="flex justify-between rounded-lg bg-white/[0.04] p-4">
                <span>{product.name}</span>
                <strong className="text-gold">{money(product.salePrice - product.purchasePrice)}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
