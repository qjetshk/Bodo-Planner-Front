import Image from "next/image";

export function BgImage() {
  return (
    <Image
      src="/BG.webp"
      alt="Background"
      fill
      className="object-cover bg-cover select-none pointer-events-none draggable-false blur-[10px]"
      loading="eager" // Измените на eager для фоновых изображений
      quality={5} // Еще больше снизьте качество
      priority={true} // Для критически важных изображений
      unoptimized={false} // Дать Next.js оптимизировать
    />
    
  );
}
