import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";

export const WidgetBtn = () => {
  return (
    <Popover className="absolute right-5 bottom-5 md:right-8 md:bottom-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="group h-12 px-3 flex items-center bg-brand-500 text-white rounded-full overflow-hidden">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 group-hover:max-w-xs group-focus:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-3" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
