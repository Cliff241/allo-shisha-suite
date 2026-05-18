"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/catalog";
import { money } from "@/lib/format";

export function PosCart() {
  const [cart, setCart] = useState<any[]>([]);

  function addProduct(product: any) {
    setCart((current) => {
      const existing = current.find(
        (item) => item.sku === product.sku
      );

      if (existing) {
        return current.map((item) =>
          item.sku === product.sku
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  }

  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );
  }, [cart]);

  function validateOrder() {
    if (!cart.length) return;

    alert("Commande validée ✅");

    setCart([]);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <section className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold text-white">
          Catalogue
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <button
              key={product.sku}
              onClick={() => addProduct(product)}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left"
            >
              <p className="font-bold text-white">
                {product.name}
              </p>

              <p className="mt-2 text-gold">
                {money(product.price)}
              </p>
            </button>
          ))}
        </div>
      </section>

      <aside className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold text-white">
          Panier
        </h2>

        <div className="mt-5 space-y-3">
          {cart.map((item) => (
            <div
              key={item.sku}
              className="rounded-2xl bg-white/5 p-3"
            >
              <div className="flex items-center justify-between">
                <p className="text-white">
                  {item.name}
                </p>

                <p className="text-gold">
                  x{item.quantity}
                </p>
              </div>

              <p className="mt-1 text-sm text-white/60">
                {money(item.price * item.quantity)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-white/70">
              Total
            </span>

            <span className="text-2xl font-black text-gold">
              {money(total)}
            </span>
          </div>

          <button
            onClick={validateOrder}
            className="mt-5 w-full rounded-2xl bg-gold px-4 py-4 font-bold text-night"
          >
            Valider la commande
          </button>
        </div>
      </aside>
    </div>
  );
}
