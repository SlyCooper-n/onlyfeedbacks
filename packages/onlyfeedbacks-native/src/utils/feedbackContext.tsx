import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { AxiosError } from "axios";
import React, {
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { captureScreen } from "react-native-view-shot";
import { api } from "../services/axios";
import { feedbackTypes } from "./feedbackTypes";

const FeedbackContext = React.createContext({} as FeedbackContextValue);

export type FeedbackType = keyof typeof feedbackTypes;

interface FeedbackContextProps {
  children: ReactNode;
}

export interface FeedbackContextValue {
  feedbackType: FeedbackType | null;
  selectFeedbackType: (type: FeedbackType) => void;
  returnBack: () => void;
  screenshot: string | null;
  handleTakeScreeshot: () => Promise<void>;
  removeScreenshot: () => void;
  feedbackSent: boolean;
  sendFeedback: (comment: string) => void;
  restartFeedback: () => void;
  feedbackSending: boolean;
  bottomSheetRef: RefObject<BottomSheetMethods>;
}

export const FeedbackContextProvider = ({ children }: FeedbackContextProps) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackSending, setFeedbackSending] = useState(false);

  const bottomSheetRef = useRef<BottomSheet>(null);

  function selectFeedbackType(type: FeedbackType) {
    setFeedbackType(type);
  }

  function returnBack() {
    setFeedbackType(null);
    setScreenshot(null);
  }

  async function handleTakeScreeshot() {
    bottomSheetRef.current?.snapToPosition(0.002);

    setTimeout(async () => {
      const img = await captureScreen({
        format: "png",
        quality: 0.8,
        result: "base64",
      });

      bottomSheetRef.current?.expand();

      setScreenshot(img);
    }, 500);
  }

  function removeScreenshot() {
    setScreenshot(null);
  }

  function sendFeedback(comment: string) {
    setFeedbackSending(true);

    api
      .post("/feedbacks", {
        type: feedbackType,
        comment,
        screenshot: screenshot ? `data:image/png;base64,${screenshot}` : null,
      })
      .then(() => {
        setFeedbackSent(true);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      })
      .finally(() => {
        setFeedbackSending(false);
      });
  }

  function restartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
    setScreenshot(null);
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbackType,
        selectFeedbackType,
        returnBack,
        screenshot,
        handleTakeScreeshot,
        removeScreenshot,
        feedbackSent,
        sendFeedback,
        restartFeedback,
        feedbackSending,
        bottomSheetRef,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  return useContext(FeedbackContext);
};
