import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";

import { Loading } from "@/components/modules";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTake: (screenshot: string | null) => void;
}

export const ScreenshotButton = ({
  screenshot,
  onScreenshotTake,
}: ScreenshotButtonProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
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
        className="focus:ring-brand-500 ring-offset-base-200 z-20 flex h-10 w-10 items-end justify-end overflow-hidden rounded-[4px] border-transparent p-1 text-zinc-400 outline-none ring-offset-2 transition-all hover:scale-[2] hover:text-zinc-100 focus:scale-[2] focus:ring-2 lg:hover:scale-[2.75] lg:focus:scale-[2.75]"
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
      onClick={handleTakeScreenshot}
      className="focus:ring-brand-500 ring-offset-base-200 bg-base-100 rounded-[4px] border-transparent p-2 outline-none ring-offset-2 transition-colors hover:bg-zinc-700 focus:ring-2"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
    </button>
  );
};
