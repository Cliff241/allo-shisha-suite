import {
  Printer,
  Wallet,
  ShoppingCart,
  Clock3
} from "lucide-react";

import { AppShell } from "@/components/app-shell";
import { PosCart } from "@/components/pos-cart";

export default function PosPage() {
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
                  POS ACTIF
                </span>
              </div>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-gold">
                ALLÔ SHISHA POS
              </p>

              <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">
                Caisse & commandes live
              </h1>

              <p className="mt-4 max-w-2xl text-white/60">
                Gestion des commandes,
                tables, paiements et clôture
                de caisse en temps réel.
              </p>
            </div>

            {/* ACTIONS */}
            <div className="grid grid-cols-2 gap-3 lg:w-[420px]">
              <button className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10">
                <div className="flex items-center gap-3">
                  <Printer
                    className="text-gold"
                    size={22}
                  />

                  <div>
                    <p className="font-bold text-white">
                      Tickets
                    </p>

                    <p className="text-sm text-white/50">
                      Impression rapide
                    </p>
                  </div>
                </div>
              </button>

              <button className="rounded-2xl bg-gold p-4 text-left transition hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <Wallet
                    className="text-night"
                    size={22}
                  />

                  <div>
                    <p className="font-bold text-night">
                      Clôturer
                    </p>

                    <p className="text-sm text-night/70">
                      Fin de service
                    </p>
                  </div>
                </div>
              </button>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <ShoppingCart
                    className="text-gold"
                    size={22}
                  />

                  <div>
                    <p className="font-bold text-white">
                      12 commandes
                    </p>

                    <p className="text-sm text-white/50">
                      Aujourd’hui
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <Clock3
                    className="text-gold"
                    size={22}
                  />

                  <div>
                    <p className="font-bold text-white">
                      Service actif
                    </p>

                    <p className="text-sm text-white/50">
                      Temps réel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POS */}
        <div className="mt-8">
          <PosCart />
        </div>
      </section>
    </AppShell>
  );
}
