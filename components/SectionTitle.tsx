export default function SectionTitle({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <h2
      className={`font-[Inter] text-[26px] md:text-[36px] font-semibold uppercase tracking-wide ${
        dark ? "text-white" : "text-[#1A1A1A]"
      }`}
    >
      /{text}
    </h2>
  );
}
