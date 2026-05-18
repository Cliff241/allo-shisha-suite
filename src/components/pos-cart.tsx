"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { products } from "@/lib/catalog";
import { money } from "@/lib/format";

type CartItem = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};

function getProductPrice(product: any) {
  return product.price ?? product.salePrice ?? product.sellingPrice ?? product.unitPrice ?? 0;
}

export function PosCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addProduct(product: CartItem | any) {
    const normalizedProduct = {
      sku: product.sku,
      name: product.name,
      price: getProductPrice(product)
    };

    setCart((current) => {
      const existing = current.find((item) => item.sku === normalizedProduct.sku);

      if (existing) {
        return current.map((item) =>
          item.sku === normalizedProduct.sku
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...normalizedProduct, quantity: 1 }];
    });
  }

  function decreaseQuantity(sku: string) {
    setCart((current) =>
      current
        .map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(sku: string) {
    setCart((current) => current.filter((item) => item.sku !== sku));
  }

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  function validateOrder() {
    if (!cart.length) {
      alert("Le panier est vide.");
      return;
    }

    alert("Commande validée ✅");
    setCart([]);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      <section className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold text-white">Catalogue</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product: any) => (
            <button
              key={product.sku}
              onClick={() => addProduct(product)}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
            >
              <p className="font-bold text-white">{product.name}</p>
              <p className="mt-2 text-gold">{money(getProductPrice(product))}</p>
            </button>
          ))}
        </div>
      </section>

      <aside className="glass rounded-3xl p-5">
        <h2 className="text-2xl font-bold text-white">Panier</h2>

        <div className="mt-5 space-y-3">
          {cart.length === 0 ? (
            <p className="rounded-2xl bg-white/5 p-4 text-sm text-white/50">
              Aucun produit dans le panier.
            </p>
          ) : (
            cart.map((item) => (
              <div key={item.sku} className="rounded-2xl bg-white/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-white/60">
                      {money(item.price * item.quantity)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.sku)}
                    className="rounded-lg bg-red-500/10 p-2 text-red-200 hover:bg-red-500/20"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.sku)}
                      className="rounded-lg bg-white/10 p-2 text-white"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="min-w-8 text-center font-bold text-gold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => addProduct(item)}
                      className="rounded-lg bg-white/10 p-2 text-white"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <span className="text-sm text-white/50">
                    {money(item.price)} / unité
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-white/70">Total</span>
            <span className="text-2xl font-black text-gold">{money(total)}</span>
          </div>

          <button
            onClick={validateOrder}
            className="mt-5 w-full rounded-2xl bg-gold px-4 py-4 font-bold text-night transition hover:scale-[1.02]"
          >
            Valider la commande
          </button>
        </div>
      </aside>
    </div>
  );
}
