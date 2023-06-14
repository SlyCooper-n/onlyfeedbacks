import { useState } from "react";

import type { FeedbackData } from "@/@types";
import { Show } from "@/components/config";
import { Container, ResetFlowButton } from "@/components/modules";
import { useWidgetContext } from "@/hooks";
import { ChooseType, Content, Success } from "./Steps";

export const FeedbackFlow = () => {
  const { feedbacks, serverEndpoint } = useWidgetContext();
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function returnBack() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  async function sendFeedback(feedbackData: FeedbackData) {
    const res = await fetch(serverEndpoint, {
      method: "POST",
      body: JSON.stringify(feedbackData),
    });

    if (!res.ok) return alert(res.statusText);

    setFeedbackSent(true);
  }

  const showTypeStep = !feedbackType;
  const showContentStep = feedbackType !== null && !feedbackSent;
  const showSuccessStep = feedbackSent;

  return (
    <Container>
      <ResetFlowButton />

      <Show when={showTypeStep}>
        <ChooseType setFeedbackType={setFeedbackType} />
      </Show>

      <Show when={showContentStep}>
        <Content
          feedback={feedbacks.find((f) => f.type === feedbackType)!}
          returnBack={returnBack}
          sendFeedback={sendFeedback}
        />
      </Show>

      <Show when={showSuccessStep}>
        <Success restartFeedback={returnBack} />
      </Show>
    </Container>
  );
};
