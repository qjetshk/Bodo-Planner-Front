import { BgImage } from "./BgImage";
import TypingAnimation from "./TypeWriter";

interface Props{
    style: string
    textStyle: string
}

export function BgSection({style, textStyle}: Props) {
  return (
    <section className={`relative w-full h-full overflow-hidden ${style}`} >
      <BgImage />
      <TypingAnimation
        words={[
          `<strong style="font-size: 110px; color: white; font-style: normal;">Bōdo</strong>`,
          "ボード",
          "Organize",
          "Plan",
          "プラン",
          "Track",
          "Manage",
          "Focus",
          "Flow",
          "Visualize",
        ]}
        textStyle={textStyle}
      />
    </section>
  );
}
