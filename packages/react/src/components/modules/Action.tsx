import { CaretRight } from "phosphor-react";
import { PropsWithChildren } from "react";
import c from "tm-cl";

import { useWidgetFlow } from "@/store";

export interface WidgetActionProps extends PropsWithChildren {
  flow: string;
  className?: string;
}

export const Action = (props: WidgetActionProps) => {
  const [, setWidgetFlow] = useWidgetFlow();

  return (
    <button
      onClick={() => setWidgetFlow(props.flow)}
      className={c(
        "hover:bg-base-100 flex w-full items-center justify-between rounded p-0.5 transition-colors",
        props.className,
      )}
    >
      {props.children}

      <CaretRight weight="bold" />
    </button>
  );
};
