import { products } from "@/lib/catalog";
import type { Order } from "@/lib/types";

export const orders: Order[] = [
  {
    id: "CMD-2026-0001",
    table: "VIP 01",
    status: "pending",
    paymentMethod: "cashier",
    server: "Maya",
    createdAt: new Date().toISOString(),
    items: [
      { sku: products[0].sku, name: products[0].name, quantity: 2, unitPrice: products[0].salePrice },
      { sku: products[42].sku, name: products[42].name, quantity: 4, unitPrice: products[42].salePrice }
    ]
  },
  {
    id: "CMD-2026-0002",
    table: "Salon 04",
    status: "preparing",
    paymentMethod: "mobile_money",
    server: "Chris",
    createdAt: new Date().toISOString(),
    items: [
      { sku: products[7].sku, name: products[7].name, quantity: 1, unitPrice: products[7].salePrice },
      { sku: products[30].sku, name: products[30].name, quantity: 1, unitPrice: products[30].salePrice }
    ]
  },
  {
    id: "CMD-2026-0003",
    table: "Terrasse 02",
    status: "served",
    paymentMethod: "card",
    server: "Ariel",
    createdAt: new Date().toISOString(),
    items: [
      { sku: products[53].sku, name: products[53].name, quantity: 3, unitPrice: products[53].salePrice },
      { sku: products[60].sku, name: products[60].name, quantity: 1, unitPrice: products[60].salePrice }
    ]
  }
];

export function orderTotal(order: Order) {
  return order.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
}
