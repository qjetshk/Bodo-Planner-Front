import Image from "next/image";

export function BgImage() {
  return (
    <Image
      src="/BG.webp"
      alt="Background"
      fill
      className="object-cover select-none pointer-events-none draggable-false blur-[10px]"
      loading="lazy"
      quality={10}
    />
  );
}
