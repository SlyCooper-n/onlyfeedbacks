import { createContext, ReactNode } from "react";

export type Feedback = {
  type: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  inputPlaceholder: string;
};

export type Action = {
  flow: string;
  label: string;
  component: ReactNode;
};

export interface WidgetContextValue {
  feedbacks: Feedback[];
  serverEndpoint: string;
  actions: Action[];
  // colors?: {
  //   primary: string;
  //   content: string;
  //   base: {
  //     100: string;
  //     200: string;
  //     300: string;
  //   };
  // };
  identifier: string;
  enableHide: boolean;
  hideShortcut: {
    key: string;
    modifierKey: "ctrlKey" | "shiftKey" | "altKey" | "none";
  };
  noBranding: boolean;
}

export const WidgetContext = createContext({} as WidgetContextValue);
