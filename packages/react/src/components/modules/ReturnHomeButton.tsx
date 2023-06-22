import { useAtom } from "jotai";
import { HouseSimple } from "phosphor-react";

import { activeTabAtom } from "@/store";

export const ReturnHomeButton = () => {
  const [, setActiveTab] = useAtom(activeTabAtom);

  return (
    <button
      title="Return to widget home"
      onClick={() => setActiveTab("")}
      className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-100"
    >
      <HouseSimple weight="bold" className="h-4 w-4" />
    </button>
  );
};
