import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";

import { FeedbackData } from "..";
import { CloseBtn } from "../../../widgets/CloseBtn";
import { Loading } from "../../../widgets/Loading";
import { ScreenshotBtn } from "../ScreenshotBtn";

interface FeedbackContentStepProps {
  feedbackType: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    placeholder: string;
  };
  returnBack: () => void;
  sendFeedback: (FeedbackData: FeedbackData) => Promise<void>;
}

export const FeedbackContentStep = ({
  feedbackType,
  returnBack,
  sendFeedback,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  function handleFeedbackSubmit(e: FormEvent) {
    e.preventDefault();

    if (comment.trim() === "") {
      return;
    }

    setIsSendingFeedback(true);

    setComment("");
    sendFeedback({
      type: feedbackType.title,
      comment,
      screenshot,
    });
  }

  return (
    <>
      <header>
        <button
          type="button"
          onClick={returnBack}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackType.image.src}
            alt={feedbackType.image.alt}
            className="w-6 aspect-square"
          />
          {feedbackType.title}
        </span>

        <CloseBtn />
      </header>

      <form onSubmit={handleFeedbackSubmit} className="w-full my-8">
        <textarea
          autoFocus
          placeholder={feedbackType.placeholder}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full md:min-w-[304px] min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 bg-transparent border-zinc-600 focus:ring-1 focus:ring-brand-500 focus:border-transparent outline-none rounded-md resize-none scrollbar-thumb-zinc-700 scrollbar-transparent scrollbar-thin"
        />

        <footer className="mt-2 flex gap-2">
          <ScreenshotBtn
            screenshot={screenshot}
            onScreenshotTake={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.trim() === "" || isSendingFeedback}
            className="flex-1 p-2 flex justify-center items-center bg-brand-500 hover:bg-brand-300 text-sm border-transparent rounded-[4px] outline-none focus:ring-2 focus:ring-brand-500 ring-offset-2 ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Send feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
