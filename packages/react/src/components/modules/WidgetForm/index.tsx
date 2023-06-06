import { useState } from "react";

// import bugImg from "../../../images/bug.svg";
// import ideaImg from "../../../images/idea.svg";
// import thoughtImg from "../../../images/thought.svg";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackBtns = {
  BUG: {
    title: "Bug",
    image: {
      src: "bugImg",
      alt: "Tiny bug icon",
    },
    placeholder: "Describe the bug and tell with details what's happening...",
  },
  IDEA: {
    title: "Idea",
    image: {
      src: "ideaImg",
      alt: "Idea lamp icon",
    },
    placeholder: "Tell us what you're thinking about...",
  },
  OTHER: {
    title: "Other",
    image: {
      src: "thoughtImg",
      alt: "Thought balloon icon",
    },
    placeholder: "What's on your mind?",
  },
};

export type FeedbackType = keyof typeof feedbackBtns;

export interface FeedbackData {
  type: string;
  comment: string;
  screenshot?: string | null;
}

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function returnBack() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  async function sendFeedback(feedbackData: FeedbackData) {
    // await api.post("/feedbacks", feedbackData);

    setFeedbackSent(true);
  }

  return (
    <div className="relative mb-4 flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : !feedbackSent ? (
        <FeedbackContentStep
          feedbackType={feedbackBtns[feedbackType]}
          returnBack={returnBack}
          sendFeedback={sendFeedback}
        />
      ) : (
        <FeedbackSuccessStep restartFeedback={() => returnBack()} />
      )}

      <footer className="text-xs text-neutral-400">
        Made with 💜 by{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
