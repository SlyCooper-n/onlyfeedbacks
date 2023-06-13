import { createContext } from "react";

export type Feedback = {
  type: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  inputPlaceholder: string;
};

export interface WidgetContextValue {
  feedbacks: Feedback[];
  serverEndpoint: string;
  // colors?: {
  //   primary: string;
  //   content: string;
  //   base: {
  //     100: string;
  //     200: string;
  //     300: string;
  //   };
  // };
  widgetId?: string;
  noBranding?: boolean;
}

export const WidgetContext = createContext({} as WidgetContextValue);
