export default function StatusPill({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium ${
        dark ? "bg-white/10 text-white" : "bg-white text-[#1A1A1A]"
      } border border-black/[.04] shadow-[0_4px_14px_rgba(0,0,0,.06)]`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
      </span>
      {text}
    </span>
  );
}
