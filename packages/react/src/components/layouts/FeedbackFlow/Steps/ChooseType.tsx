import type { WidgetContextValue } from "@/context";
import { useWidgetContext } from "@/hooks";

interface ChooseTypeStepProps {
  setFeedbackType: (type: WidgetContextValue["feedbacks"][0]["type"]) => void;
}

export const ChooseType = ({ setFeedbackType }: ChooseTypeStepProps) => {
  const { feedbacks } = useWidgetContext();

  return (
    <>
      <header>
        <span className="text-xl leading-6">Give your feedback</span>
      </header>

      <div className="flex w-full max-w-[400px] flex-wrap gap-2 py-8">
        {feedbacks.map((feedback) => (
          <button
            key={feedback.type}
            onClick={() => setFeedbackType(feedback.type)}
            className="hover:border-brand-500 focus:border-brand-500 bg-base-100 flex w-24 min-w-[calc(100%/3-2rem)] flex-1 flex-col items-center gap-1 rounded-lg border-2 border-transparent px-0.5 py-2 transition-colors focus:outline-none"
          >
            <img
              src={feedback.image.src}
              alt={feedback.image.alt}
              className="aspect-square w-12 object-cover"
            />

            <span className="text-sm">{feedback.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
