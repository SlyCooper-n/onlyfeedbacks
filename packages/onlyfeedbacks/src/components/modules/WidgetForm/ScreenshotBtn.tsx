import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../../widgets/Loading";

interface FeedbackContentStepProps {
  screenshot: string | null;
  onScreenshotTake: (screenshot: string | null) => void;
}

export const ScreenshotBtn = ({
  screenshot,
  onScreenshotTake,
}: FeedbackContentStepProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreeshot() {
    setIsTakingScreenshot(true);

    const image = await html2canvas(document.querySelector("html")!);
    const base64image = image.toDataURL("image/png");

    onScreenshotTake(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        onClick={() => onScreenshotTake(null)}
        className="w-10 h-10 hover:scale-[2] focus:scale-[2] lg:hover:scale-[2.75] lg:focus:scale-[2.75] p-1 flex justify-end items-end text-zinc-400 hover:text-zinc-100 border-transparent rounded-[4px] outline-none focus:ring-2 focus:ring-brand-500 ring-offset-2 ring-offset-zinc-900 transition-all overflow-hidden z-20"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: "cover",
        }}
      >
        <Trash weight="fill" className="z-10" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreeshot}
      className="p-2 bg-zinc-800 border-transparent rounded-[4px] hover:bg-zinc-700 transition-colors outline-none focus:ring-2 focus:ring-brand-500 ring-offset-2 ring-offset-zinc-900"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
};
