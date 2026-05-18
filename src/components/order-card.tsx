import { StatusBadge } from "@/components/status-badge";
import { money } from "@/lib/format";
import { orderTotal } from "@/lib/orders";
import type { Order } from "@/lib/types";

export function OrderCard({ order }: { order: Order }) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-white/55">{order.id}</p>
          <h3 className="mt-1 text-lg font-bold text-white">Table {order.table}</h3>
        </div>
        <StatusBadge status={order.status} />
      </div>
      <div className="mt-4 space-y-2">
        {order.items.map((item) => (
          <div key={`${order.id}-${item.sku}`} className="flex justify-between gap-3 text-sm text-white/72">
            <span>{item.quantity}x {item.name}</span>
            <span>{money(item.quantity * item.unitPrice)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-sm text-white/58">{order.paymentMethod}</span>
        <strong className="text-gold">{money(orderTotal(order))}</strong>
      </div>
    </article>
  );
}
