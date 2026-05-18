import Link from "next/link";
import {
  ArrowUpRight,
  AlertTriangle,
  ShoppingCart,
  Wallet,
  Boxes,
  QrCode
} from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { MetricCard } from "@/components/metric-card";
import { OrderCard } from "@/components/order-card";
import { products } from "@/lib/catalog";
import { money, percent } from "@/lib/format";
import { orders, orderTotal } from "@/lib/orders";

export default function DashboardPage() {
  const revenue = orders.reduce(
    (sum, order) => sum + orderTotal(order),
    0
  );

  const cogs = orders.reduce(
    (sum, order) =>
      sum +
      order.items.reduce(
        (itemSum, item) =>
          itemSum +
          (products.find(
            (product) => product.sku === item.sku
          )?.purchasePrice ?? 0) *
            item.quantity,
        0
      ),
    0
  );

  const margin =
    revenue > 0
      ? ((revenue - cogs) / revenue) * 100
      : 0;

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl pb-24">
        {/* HEADER */}
        <div className="glass rounded-3xl p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-emerald-300">
                  Système actif
                </span>
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gold">
                ALLÔ SHISHA CONTROL CENTER
              </p>

              <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">
                Dashboard Lounge Premium
              </h1>

              <p className="mt-4 max-w-2xl text-white/60">
                Gestion temps réel des commandes,
                du stock, des finances et du personnel.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/pos"
                className="flex items-center gap-2 rounded-xl bg-gold px-5 py-3 font-bold text-night transition hover:scale-105"
              >
                <ShoppingCart size={18} />
                Ouvrir le POS
              </Link>

              <Link
                href="/qr/demo-table"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
              >
                <QrCode size={18} />
                Tester QR
              </Link>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="CA du jour"
            value={money(revenue)}
            hint="+18% vs hier"
          />

          <MetricCard
            label="Bénéfice brut"
            value={money(revenue - cogs)}
            hint={`Marge ${percent(margin)}`}
          />

          <MetricCard
            label="Commandes actives"
            value={String(orders.length)}
            hint="Tables en service"
          />

          <MetricCard
            label="Stock critique"
            value="11"
            hint="Produits sensibles"
          />
        </div>

        {/* CONTENT */}
        <div className="mt-8 grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
          {/* COMMANDES */}
          <section className="glass rounded-3xl p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Commandes récentes
                </h2>

                <p className="text-sm text-white/50">
                  Activité live du POS
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
                Live
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {orders.map((order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                />
              ))}
            </div>
          </section>

          {/* SIDE PANEL */}
          <div className="space-y-5">
            {/* ALERTES */}
            <section className="glass rounded-3xl p-5">
              <div className="flex items-center gap-2">
                <AlertTriangle
                  className="text-gold"
                  size={22}
                />

                <h2 className="text-xl font-bold text-white">
                  Alertes manager
                </h2>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-100">
                  Stock charbon premium faible.
                </div>

                <div className="rounded-2xl border border-gold/20 bg-gold/10 p-4 text-gold">
                  Vérifier les prix d’achat fournisseurs.
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-100">
                  Facturation PDF active et sécurisée.
                </div>
              </div>
            </section>

            {/* ACTIONS RAPIDES */}
            <section className="glass rounded-3xl p-5">
              <h2 className="text-xl font-bold text-white">
                Actions rapides
              </h2>

              <div className="mt-5 grid gap-3">
                <Link
                  href="/pos"
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <ShoppingCart
                      className="text-gold"
                      size={20}
                    />

                    <span className="text-white">
                      Nouvelle commande
                    </span>
                  </div>

                  <ArrowUpRight
                    className="text-white/50"
                    size={18}
                  />
                </Link>

                <Link
                  href="/stock"
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Boxes
                      className="text-gold"
                      size={20}
                    />

                    <span className="text-white">
                      Gestion stock
                    </span>
                  </div>

                  <ArrowUpRight
                    className="text-white/50"
                    size={18}
                  />
                </Link>

                <Link
                  href="/finance"
                  className="flex items-center justify-between rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Wallet
                      className="text-gold"
                      size={20}
                    />

                    <span className="text-white">
                      Finance & profits
                    </span>
                  </div>

                  <ArrowUpRight
                    className="text-white/50"
                    size={18}
                  />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
