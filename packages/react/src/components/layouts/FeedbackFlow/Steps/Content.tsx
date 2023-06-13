import { ArrowLeft } from "phosphor-react";
import { useState, type FormEvent } from "react";

import { CloseBtn, Loading, ScreenshotButton } from "@/components/modules";
import type { Feedback } from "@/context";
import type { FeedbackData } from "..";

interface ContentStepProps {
  feedback: Feedback;
  returnBack: () => void;
  sendFeedback: (FeedbackData: FeedbackData) => Promise<void>;
}

export const Content = ({
  feedback,
  returnBack,
  sendFeedback,
}: ContentStepProps) => {
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
      type: feedback.type,
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
          className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedback.image.src}
            alt={feedback.image.alt}
            className="aspect-square w-6"
          />
          {feedback.title}
        </span>

        <CloseBtn />
      </header>

      <form onSubmit={handleFeedbackSubmit} className="my-8 w-full">
        <textarea
          autoFocus
          placeholder={feedback.inputPlaceholder}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="focus:border-brand-500 scrollbar-thumb-zinc-700 scrollbar-transparent scrollbar-thin border-base-100 bg-base-300 min-h-[112px] w-full resize-none rounded-md border p-1 text-sm placeholder-zinc-400 outline-none transition-colors md:min-w-[304px]"
        />

        <footer className="mt-2 flex gap-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTake={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.trim() === "" || isSendingFeedback}
            className="bg-brand-500 hover:bg-brand-300 focus:ring-brand-500 disabled:hover:bg-brand-500 ring-offset-base-200 flex flex-1 items-center justify-center rounded-[4px] border-transparent p-2 text-sm outline-none ring-offset-2 transition-colors focus:ring-2 disabled:opacity-50"
          >
            {isSendingFeedback ? <Loading /> : "Send feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
