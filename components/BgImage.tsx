import Image from "next/image";

export function BgImage() {
  return (
    <Image
      src="/BG.webp"
      alt="Background"
      fill
      className="object-cover select-none pointer-events-none"
      priority 
      quality={80} 
      unoptimized={false} 
    />
  );
}