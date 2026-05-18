export function MetricCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="glass rounded-lg p-5">
      <p className="text-sm text-white/58">{label}</p>
      <strong className="mt-3 block text-2xl text-white">{value}</strong>
      <span className="mt-2 block text-xs text-gold">{hint}</span>
    </div>
  );
}
