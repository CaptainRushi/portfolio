export default function SectionTitle({
  text,
  dark = false,
  align = "left",
}: {
  text: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <h2
      className={`font-[Inter] text-[clamp(30px,3.45vw,54px)] font-medium uppercase tracking-[-0.01em] ${
        dark ? "text-white" : "text-[#1A1A1A]"
      } ${align === "center" ? "text-center" : "text-left"}`}
    >
      /{text}
    </h2>
  );
}
