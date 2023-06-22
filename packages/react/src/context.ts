import { createContext } from "react";

export interface WidgetContextValue {
  enableHide: boolean;
  hideShortcut: {
    key: string;
    modifierKey: "ctrlKey" | "shiftKey" | "altKey" | "none";
  };
  noBranding: boolean;
}

export const WidgetContext = createContext({} as WidgetContextValue);
