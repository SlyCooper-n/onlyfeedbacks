import { useAtom } from "jotai";
import { useEffect } from "react";

import { WidgetContextValue } from "@/context";
import { activeTabAtom, hideWidgetAtom, isWidgetOpenAtom } from "@/store";

interface ContextValue extends Partial<WidgetContextValue> {}

export const useWidgetRoot = (contextValue: ContextValue) => {
  const [isWidgetOpen, setIsWidgetOpen] = useAtom(isWidgetOpenAtom);
  const [hideWidget, setHideWidget] = useAtom(hideWidgetAtom);
  const [, setActiveTab] = useAtom(activeTabAtom);

  const enableHide = contextValue.enableHide ?? true;
  const modifierKey = contextValue.hideShortcut?.modifierKey ?? "altKey";
  const key = contextValue.hideShortcut?.key ?? "i";

  function registerHideShortcut() {
    if (enableHide) {
      window.addEventListener("keyup", (e) => {
        if ((modifierKey === "none" || e[modifierKey]) && e.key === key) {
          setIsWidgetOpen(false);
          setHideWidget((prev) => !prev);
        }
      });
    }

    return () => window.removeEventListener("keyup", () => {});
  }

  useEffect(() => {
    const unregister = registerHideShortcut();

    return unregister;
  }, []);

  const contextValueWithDefaults: WidgetContextValue = {
    enableHide,
    hideShortcut: { key, modifierKey },
    noBranding: contextValue.noBranding ?? false,
  };

  return {
    isWidgetOpen,
    setIsWidgetOpen,
    hideWidget,
    contextValueWithDefaults,
    setActiveTab,
  };
};
