"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { categories, products } from "@/lib/catalog";
import { money } from "@/lib/format";

export default function QrTablePage() {
  const params = useParams<{ tableToken: string }>();
  const [entered, setEntered] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  const [cart, setCart] = useState<Record<string, number>>({});
  const visibleProducts = useMemo(() => products.filter((product) => product.category === category).slice(0, 18), [category]);
  const total = Object.entries(cart).reduce((sum, [sku, qty]) => {
    const product = products.find((item) => item.sku === sku);
    return sum + (product ? product.salePrice * qty : 0);
  }, 0);

  if (!entered) {
    return (
      <main className="flex min-h-screen items-center justify-center px-5">
        <section className="glass max-w-xl rounded-lg p-8 text-center shadow-glow">
          <div className="flex justify-center"><BrandLogo /></div>
          <p className="mt-8 text-lg text-white/72">Bonjour, bienvenue chez ALLÔ SHISHA</p>
          <h1 className="mt-4 text-4xl font-black text-white">Table sécurisée {params.tableToken}</h1>
          <button onClick={() => setEntered(true)} className="mt-8 rounded-lg bg-gold px-6 py-4 font-bold text-night">
            Souhaitez-vous accéder à la carte ?
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 pb-36">
      <div className="flex items-center justify-between gap-4">
        <BrandLogo compact />
        <div className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white">Table {params.tableToken}</div>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`shrink-0 rounded-lg px-4 py-2 text-sm ${item === category ? "bg-gold text-night" : "bg-white/10 text-white"}`}>
            {item}
          </button>
        ))}
      </div>
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <article key={product.sku} className="glass rounded-lg p-3">
            <Image src={product.image} alt="" width={480} height={360} className="h-36 w-full rounded-lg object-cover" />
            <h2 className="mt-3 font-bold text-white">{product.name}</h2>
            <p className="mt-1 text-sm text-white/55">{product.format}</p>
            <div className="mt-4 flex items-center justify-between">
              <strong className="text-gold">{money(product.salePrice)}</strong>
              <button onClick={() => setCart((current) => ({ ...current, [product.sku]: (current[product.sku] ?? 0) + 1 }))} className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-night">
                Ajouter
              </button>
            </div>
          </article>
        ))}
      </section>
      <footer className="glass fixed bottom-0 left-0 right-0 border-t border-white/10 p-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShoppingBag />
            <div>
              <p className="text-xs text-white/55">Panier</p>
              <strong>{money(total)}</strong>
            </div>
          </div>
          <button className="rounded-lg bg-gold px-5 py-3 text-sm font-bold text-night">Valider</button>
        </div>
      </footer>
    </main>
  );
}
