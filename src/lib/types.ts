export type OrderStatus = "pending" | "accepted" | "preparing" | "served" | "paid" | "cancelled";

export type PaymentMethod = "cash" | "mobile_money" | "card" | "cashier";

export type Product = {
  sku: string;
  name: string;
  category: string;
  description: string;
  image: string;
  format: string;
  salePrice: number;
  purchasePrice: number;
  stock: number;
  alertThreshold: number;
  criticalThreshold: number;
  available: boolean;
  active: boolean;
  costEstimated: boolean;
};

export type OrderItem = {
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
};

export type Order = {
  id: string;
  table: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  server: string;
  createdAt: string;
  items: OrderItem[];
};
