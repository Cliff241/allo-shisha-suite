import { NextResponse } from "next/server";
import { z } from "zod";
import { products } from "@/lib/catalog";
import { orders, orderTotal } from "@/lib/orders";

const orderSchema = z.object({
  tableToken: z.string().min(3),
  paymentMethod: z.enum(["cash", "mobile_money", "card", "cashier"]),
  items: z.array(z.object({ sku: z.string(), quantity: z.number().int().positive() })).min(1)
});

export async function GET() {
  return NextResponse.json({ data: orders.map((order) => ({ ...order, total: orderTotal(order) })) });
}

export async function POST(request: Request) {
  const payload = orderSchema.parse(await request.json());
  const items = payload.items.map((item) => {
    const product = products.find((entry) => entry.sku === item.sku);
    if (!product) throw new Error(`Unknown SKU ${item.sku}`);
    return { sku: product.sku, name: product.name, quantity: item.quantity, unitPrice: product.salePrice };
  });

  const created = {
    id: `CMD-2026-${String(orders.length + 1).padStart(4, "0")}`,
    table: payload.tableToken,
    status: "pending" as const,
    paymentMethod: payload.paymentMethod,
    server: "Non assigné",
    createdAt: new Date().toISOString(),
    items
  };

  return NextResponse.json({ data: created, total: orderTotal(created) }, { status: 201 });
}
