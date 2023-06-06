import { feedbackBtns, FeedbackType } from "..";
import { CloseBtn } from "../../../widgets/CloseBtn";

type FeedbackTypeStepProps = {
  setFeedbackType: (type: FeedbackType | null) => void;
};

export const FeedbackTypeStep = ({
  setFeedbackType,
}: FeedbackTypeStepProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Give your feedback</span>

        <CloseBtn />
      </header>

      <div className="w-full py-8 flex gap-2">
        {Object.entries(feedbackBtns).map(([key, btn]) => (
          <button
            key={key}
            onClick={() => setFeedbackType(key as FeedbackType)}
            className="flex-1 w-24 py-5 flex flex-col items-center gap-2 bg-zinc-800 border-2 border-transparent rounded-lg hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={btn.image.src} alt={btn.image.alt} />

            <span className="text-sm">{btn.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
