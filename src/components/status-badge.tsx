import type { OrderStatus } from "@/lib/types";

const labels: Record<OrderStatus, string> = {
  pending: "En attente",
  accepted: "Acceptée",
  preparing: "Préparation",
  served: "Servie",
  paid: "Payée",
  cancelled: "Annulée"
};

const styles: Record<OrderStatus, string> = {
  pending: "bg-neon/16 text-neon",
  accepted: "bg-violet/20 text-violet-200",
  preparing: "bg-gold/20 text-gold",
  served: "bg-emerald-400/16 text-emerald-200",
  paid: "bg-white text-night",
  cancelled: "bg-red-500/18 text-red-200"
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  return <span className={`rounded px-2 py-1 text-xs font-bold ${styles[status]}`}>{labels[status]}</span>;
}
