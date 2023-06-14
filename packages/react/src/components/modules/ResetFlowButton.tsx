import { HouseSimple } from "phosphor-react";

import { useWidgetFlow } from "@/store";

export const ResetFlowButton = () => {
  const [, setWidgetFlow] = useWidgetFlow();

  return (
    <button
      title="Return widget home"
      onClick={() => setWidgetFlow(null)}
      className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-100"
    >
      <HouseSimple weight="bold" className="h-4 w-4" />
    </button>
  );
};
