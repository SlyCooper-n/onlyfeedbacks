import * as Popover from "@radix-ui/react-popover";
import * as Separator from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { ArrowUpRight, ChatTeardropDots, X } from "phosphor-react";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import c from "tm-cl";

import { For, Show } from "@/components/config";
import { Action, Branding, Container, HideButton } from "@/components/modules";
import { WidgetContext, type WidgetContextValue } from "@/context";
import { useWidgetContext, useWidgetRoot } from "@/hooks";
import { useWidgetFlow, useWidgetToggler } from "@/store";

export interface WidgetProps
  extends Partial<WidgetContextValue>,
    PropsWithChildren {
  feedbacks: WidgetContextValue["feedbacks"];
  serverEndpoint: WidgetContextValue["serverEndpoint"];
}

export const Root = ({ children, ...contextValue }: WidgetProps) => {
  const {
    isWidgetOpen,
    setIsWidgetOpen,
    setWidgetFlow,
    hideWidget,
    contextValueWithDefaults,
  } = useWidgetRoot(contextValue);

  return (
    <WidgetContext.Provider value={contextValueWithDefaults}>
      <Popover.Root
        open={isWidgetOpen}
        onOpenChange={(open) => {
          setIsWidgetOpen(open);

          if (open) setWidgetFlow(null);
        }}
        children={hideWidget ? null : children}
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
  const { actions, enableHide, hideShortcut, noBranding } = useWidgetContext();
  const [widgetFlow] = useWidgetFlow();

  const showWidgetHome = widgetFlow === null;

  return (
    <Popover.Portal>
      <Popover.Content
        align="end"
        sideOffset={12}
        className="text-base-content font-medium"
      >
        <Show when={showWidgetHome}>
          <Container className="pt-2">
            <Show when={Boolean(children)}>
              <Divider label="Actions" />
            </Show>

            <For each={actions}>
              {(action) => (
                <Action key={action.flow} flow={action.flow}>
                  {action.label}
                </Action>
              )}
            </For>

            <Show when={enableHide}>
              <HideButton
                shortcut={{
                  key: hideShortcut.key,
                  modifierKey: hideShortcut.modifierKey,
                }}
              />
            </Show>

            <Show when={Boolean(children)}>
              <Divider label="Links" />

              {children}
            </Show>
          </Container>
        </Show>

        <For each={actions}>
          {(action) => (
            <Show key={action.flow} when={action.flow === widgetFlow}>
              {action.component}
            </Show>
          )}
        </For>

        <Show when={!noBranding}>
          <Branding />
        </Show>
      </Popover.Content>
    </Popover.Portal>
  );
};

export interface WidgetLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const Link = ({ asChild, ...props }: WidgetLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      {...props}
      className={c(
        "flex items-center gap-2 self-start rounded p-0.5 underline-offset-2 transition-colors hover:underline",
        props.className,
      )}
    >
      {props.children}

      <ArrowUpRight />
    </Comp>
  );
};

export interface DividerProps {
  label?: string;
}

export const Divider = (props: DividerProps) => (
  <div className="my-2 flex w-full items-center gap-1">
    <span className="text-sm text-neutral-500">
      {props.label ? props.label : null}
    </span>

    <Separator.Root className="bg-base-100 h-px flex-1" />
  </div>
);
