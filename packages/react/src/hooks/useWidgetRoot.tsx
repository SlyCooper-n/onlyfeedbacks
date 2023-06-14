import { useAtom } from "jotai";
import { useEffect } from "react";

import { FeedbackFlow } from "@/components/layouts";
import { WidgetContextValue } from "@/context";
import { isWidgetOpenAtom, useHideWidget, useWidgetFlow } from "@/store";

interface ContextValue extends Partial<WidgetContextValue> {
  feedbacks: WidgetContextValue["feedbacks"];
  serverEndpoint: WidgetContextValue["serverEndpoint"];
}

export const useWidgetRoot = (contextValue: ContextValue) => {
  const [isWidgetOpen, setIsWidgetOpen] = useAtom(isWidgetOpenAtom);
  const [hideWidget, setHideWidget] = useHideWidget();
  const [, setWidgetFlow] = useWidgetFlow();

  const enableHide = contextValue.enableHide ?? true;
  const modifierKey = contextValue.hideShortcut?.modifierKey ?? "altKey";
  const key = contextValue.hideShortcut?.key ?? "i";

  useEffect(() => {
    if (enableHide) {
      window.addEventListener("keyup", (e) => {
        if ((modifierKey === "none" || e[modifierKey]) && e.key === key) {
          setIsWidgetOpen(false);
          setHideWidget((prev) => !prev);
        }
      });
    }

    return () => window.removeEventListener("keyup", () => {});
  }, []);

  const contextValueWithDefaults: WidgetContextValue = {
    ...contextValue,
    actions: [
      {
        flow: "feedback",
        label: "Send a feedback",
        component: <FeedbackFlow />,
      },
      ...(contextValue.actions ?? []),
    ],
    identifier: contextValue.identifier ?? window.origin,
    enableHide,
    hideShortcut: {
      key,
      modifierKey,
    },
    noBranding: contextValue.noBranding ?? false,
  };

  return {
    isWidgetOpen,
    setIsWidgetOpen,
    hideWidget,
    contextValueWithDefaults,
    setWidgetFlow,
  };
};
