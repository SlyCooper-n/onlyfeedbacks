import * as Popover from "@radix-ui/react-popover";
import { useAtom } from "jotai";
import { X } from "phosphor-react";

import { widgetFlowAtom } from "@/store";

export const CloseBtn = () => {
  const [, setFlow] = useAtom(widgetFlowAtom);

  return (
    <Popover.Close
      title="Close widget"
      onClick={() => setFlow(null)}
      className="absolute right-5 top-5 text-zinc-400 hover:text-zinc-100"
    >
      <X weight="bold" className="h-4 w-4" />
    </Popover.Close>
  );
};
