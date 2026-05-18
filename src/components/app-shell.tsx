import Link from "next/link";
import { BarChart3, Boxes, ChefHat, FileText, LayoutDashboard, QrCode, Users, WalletCards } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const nav = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/pos", label: "POS", icon: ChefHat },
  { href: "/qr/demo-table", label: "QR table", icon: QrCode },
  { href: "/stock", label: "Stock", icon: Boxes },
  { href: "/finance", label: "Finance", icon: WalletCards },
  { href: "/hr", label: "RH", icon: Users },
  { href: "/invoices", label: "Factures", icon: FileText },
  { href: "/reports", label: "Reporting", icon: BarChart3 }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="glass sticky top-0 z-30 flex h-20 items-center justify-between px-4 lg:h-screen lg:flex-col lg:items-stretch lg:p-5">
        <BrandLogo compact />
        <nav className="hidden gap-2 lg:flex lg:flex-col">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/74 transition hover:bg-white/10 hover:text-white">
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden rounded-lg border border-gold/30 bg-gold/10 p-4 text-sm text-gold lg:block">
          Suite premium prête VPS, PWA, PostgreSQL et Docker.
        </div>
      </aside>
      <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      <nav className="glass fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 gap-1 p-2 lg:hidden">
        {nav.slice(0, 5).map((item) => (
          <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 rounded-lg py-2 text-[11px] text-white/70">
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
