import * as Popover from "@radix-ui/react-popover";
import { Slot } from "@radix-ui/react-slot";
import * as Tabs from "@radix-ui/react-tabs";
import { useAtom, useAtomValue } from "jotai";
import { CaretRight } from "phosphor-react";
import { AnchorHTMLAttributes, PropsWithChildren } from "react";
import c from "tm-cl";

import { Show } from "@/components/config";
import { Branding } from "@/components/modules";
import { WidgetContext, type WidgetContextValue } from "@/context";
import { useWidgetContext, useWidgetRoot } from "@/hooks";
import { activeTabAtom } from "@/store";

export interface WidgetProps
  extends Partial<WidgetContextValue>,
    PropsWithChildren {}

export const Root = ({ children, ...contextValue }: WidgetProps) => {
  const {
    isWidgetOpen,
    setIsWidgetOpen,
    setActiveTab,
    hideWidget,
    contextValueWithDefaults,
  } = useWidgetRoot(contextValue);

  return (
    <WidgetContext.Provider value={contextValueWithDefaults}>
      <Popover.Root
        open={isWidgetOpen}
        onOpenChange={(open) => {
          setIsWidgetOpen(open);

          if (open) setActiveTab("");
        }}
        children={hideWidget ? null : children}
      />
    </WidgetContext.Provider>
  );
};

export interface WidgetButtonProps extends PropsWithChildren {
  className?: string;
}

export const Button = (props: WidgetButtonProps) => {
  return (
    <Popover.Trigger
      className={c(
        `bg-of-brand-500 group absolute bottom-5 right-5 h-12 rounded-full px-3 text-white md:bottom-8 md:right-8`,
        props.className,
      )}
    >
      {props.children}
    </Popover.Trigger>
  );
};

export interface WidgetContentProps
  extends Pick<Popover.PopoverContentProps, "align" | "sideOffset">,
    Omit<Tabs.TabsProps, "value" | "onValueChange" | "activationMode"> {}

export const Content = (props: WidgetContentProps) => {
  const { noBranding } = useWidgetContext();
  const [activeTab, setActiveTab] = useAtom(activeTabAtom);

  return (
    <Popover.Portal>
      <Popover.Content
        align={props.align ?? "end"}
        sideOffset={props.sideOffset ?? 12}
      >
        <Tabs.Root
          {...props}
          value={activeTab}
          onValueChange={setActiveTab}
          activationMode="manual"
          className={c(
            "bg-of-base-200 text-of-base-content relative z-10 w-[calc(100vw-2rem)] rounded-2xl font-medium shadow-lg md:w-auto md:min-w-[256px]",
            props.className,
          )}
        >
          {props.children}
        </Tabs.Root>

        <Show when={!noBranding}>
          <Branding />
        </Show>
      </Popover.Content>
    </Popover.Portal>
  );
};

export interface WidgetTabListProps extends Tabs.TabsListProps {}

export const TabList = (props: WidgetTabListProps) => {
  const activeTab = useAtomValue(activeTabAtom);

  if (activeTab) return null;

  return (
    <Tabs.List
      {...props}
      className={c(
        "flex w-full flex-col data-[layout=compact]:text-yellow-500 data-[layout=default]:text-lime-500",
        props.className,
      )}
    />
  );
};

export interface WidgetTabContentProps extends Tabs.TabsContentProps {}

export const TabContent = (props: WidgetTabContentProps) => {
  return <Tabs.Content {...props} className={c("p-4", props.className)} />;
};

export interface WidgetTabTriggerProps extends Tabs.TabsTriggerProps {
  rightIconClassName?: string;
}

export const TabTrigger = (props: WidgetTabTriggerProps) => {
  return (
    <Tabs.Trigger
      {...props}
      className={c(
        "hover:bg-of-base-100 flex w-full items-center gap-2 rounded p-0.5 transition-colors",
        props.className,
      )}
    >
      {props.children}

      <CaretRight
        weight="bold"
        className={c("ml-auto", props.rightIconClassName)}
      />
    </Tabs.Trigger>
  );
};

export interface WidgetLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  rightIconClassName?: string;
  asChild?: boolean;
}

export const Link = ({ asChild, ...props }: WidgetLinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      {...props}
      className={c(
        "hover:bg-of-base-100 flex w-full items-center gap-2 rounded p-0.5 transition-colors",
        props.className,
      )}
    >
      {props.children}

      <CaretRight
        weight="bold"
        className={c("ml-auto", props.rightIconClassName)}
      />
    </Comp>
  );
};
