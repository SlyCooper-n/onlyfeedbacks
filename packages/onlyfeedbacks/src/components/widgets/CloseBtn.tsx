import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export const CloseBtn = () => {
  return (
    <Popover.Button
      title="Close feedback form"
      className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
};
