import Image from "next/image";

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Image src="/brand/logo.svg" alt="ALLÔ SHISHA" width={compact ? 156 : 220} height={compact ? 48 : 68} priority />
    </div>
  );
}
