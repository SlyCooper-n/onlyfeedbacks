import * as Popover from "@radix-ui/react-popover";
import * as Separator from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { useAtom } from "jotai";
import { CaretRight, ChatTeardropDots, ToggleRight, X } from "phosphor-react";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import c from "tm-cl";

import { Show } from "@/components/config";
import { Branding, Container } from "@/components/modules";
import { WidgetContext, type WidgetContextValue } from "@/context";
import { useWidgetContext } from "@/hooks";
import {
  isWidgetOpenAtom,
  useDisableForSession,
  useWidgetFlow,
  useWidgetToggler,
} from "@/store";
import { FeedbackFlow } from "./FeedbackFlow";

export interface WidgetProps extends WidgetContextValue, PropsWithChildren {}

export const Root = ({ children, ...contextValue }: WidgetProps) => {
  const [isWidgetOpen, setIsWidgetOpen] = useAtom(isWidgetOpenAtom);
  const [disableForSession] = useDisableForSession();

  const contextValueWithDefaults: WidgetContextValue = {
    ...contextValue,
    noBranding: contextValue.noBranding ?? false,
  };

  return (
    <WidgetContext.Provider value={contextValueWithDefaults}>
      <Popover.Root
        open={isWidgetOpen}
        onOpenChange={setIsWidgetOpen}
        children={disableForSession ? null : children}
      />
    </WidgetContext.Provider>
  );
};

export const Button = () => {
  const { isOpen } = useWidgetToggler();

  const Icon = isOpen ? X : ChatTeardropDots;
  const widgetLabel = isOpen ? "Close" : "Feedback";

  return (
    <Popover.Trigger className="bg-brand-500 group absolute bottom-5 right-5 flex h-12 items-center overflow-hidden rounded-full px-3 text-white md:bottom-8 md:right-8">
      <Icon weight="bold" className="h-6 w-6" />

      <span className="max-w-0 font-semibold transition-all duration-500 ease-linear group-hover:max-w-xs group-focus-visible:max-w-xs">
        <span className="pl-3" />
        {widgetLabel}
      </span>
    </Popover.Trigger>
  );
};

export interface WidgetContentProps extends PropsWithChildren {}

export const Content = ({ children }: WidgetContentProps) => {
  const { noBranding } = useWidgetContext();
  const [widgetFlow, setWidgetFlow] = useWidgetFlow();

  const showWidgetHome = widgetFlow === null;
  const showFeedbackFlow = widgetFlow === "feedback";

  return (
    <Popover.Portal>
      <Popover.Content
        align="end"
        sideOffset={12}
        onInteractOutside={() => setWidgetFlow(null)}
        onCloseAutoFocus={() => setWidgetFlow(null)}
        className="text-base-content font-medium"
      >
        <Show when={showWidgetHome}>
          <Container>
            <Action flow="feedback">Send a feedback</Action>

            {children}
          </Container>
        </Show>

        <Show when={showFeedbackFlow}>
          <FeedbackFlow />
        </Show>

        <Show when={!noBranding}>
          <Branding />
        </Show>
      </Popover.Content>
    </Popover.Portal>
  );
};

interface WidgetActionProps extends PropsWithChildren {
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

interface WidgetLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const Link = ({ asChild, ...props }: WidgetLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      {...props}
      className={c(
        "hover:bg-base-100 self-start rounded p-0.5 transition-colors",
        props.children,
      )}
    />
  );
};

export const Divider = () => (
  <Separator.Root className="bg-base-100 my-2 h-px w-full" />
);

export const DisableButton = () => {
  const [, setDisableForSession] = useDisableForSession();

  return (
    <button
      onClick={() => setDisableForSession(true)}
      className="hover:bg-base-100 flex w-full items-center justify-between rounded p-0.5 transition-colors"
    >
      Disable for session
      <ToggleRight weight="bold" />
    </button>
  );
};
