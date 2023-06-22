import { useState } from "react";

import type { FeedbackData } from "@/@types";
import { Show } from "@/components/config";
import { ReturnHomeButton } from "@/components/modules";
import { ChooseType, Content, Success } from "./Steps";

export type Feedback = {
  type: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  inputPlaceholder: string;
};

interface FeedbackTabProps {
  feedbacks: Feedback[];
  serverEndpoint: string;
}

export const FeedbackTab = (props: FeedbackTabProps) => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function returnBack() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  async function sendFeedback(feedbackData: FeedbackData) {
    try {
      await fetch(props.serverEndpoint, {
        method: "POST",
        body: JSON.stringify(feedbackData),
      });

      setFeedbackSent(true);
    } catch (_) {
      alert("Failed to send feedback. \nPlease try again.");
    }
  }

  const showTypeStep = !feedbackType;
  const showContentStep = feedbackType !== null && !feedbackSent;
  const showSuccessStep = feedbackSent;

  return (
    <>
      <ReturnHomeButton />

      <Show when={showTypeStep}>
        <ChooseType
          feedbacks={props.feedbacks}
          setFeedbackType={setFeedbackType}
        />
      </Show>

      <Show when={showContentStep}>
        <Content
          feedback={props.feedbacks.find((f) => f.type === feedbackType)!}
          returnBack={returnBack}
          sendFeedback={sendFeedback}
        />
      </Show>

      <Show when={showSuccessStep}>
        <Success restartFeedback={returnBack} />
      </Show>
    </>
  );
};
