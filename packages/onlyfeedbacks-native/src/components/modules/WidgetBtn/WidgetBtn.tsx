import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { useFeedback } from "../../../utils/feedbackContext";
import { Steps } from "../Steps";
import { styles } from "./WidgetBtn.style";

export const WidgetBtn = () => {
  const { bottomSheetRef, restartFeedback } = useFeedback();

  function openButtomSheet() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity onPress={openButtomSheet} style={styles.button}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[0.001, 320]}
        handleIndicatorStyle={styles.indicator}
        backgroundStyle={styles.modal}
        onChange={(snapPoint) => (snapPoint == 0 ? restartFeedback() : null)}
      >
        <Steps />
      </BottomSheet>
    </>
  );
};
