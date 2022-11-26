import { Camera, Trash } from "phosphor-react-native";
import { Image, TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { useFeedback } from "../../../utils/feedbackContext";
import { styles } from "./ScreenshotBtn.style";

export const ScreenshotBtn = () => {
  const { screenshot, handleTakeScreeshot, removeScreenshot } = useFeedback();

  return (
    <TouchableOpacity
      onPress={screenshot ? removeScreenshot : handleTakeScreeshot}
      style={styles.container}
    >
      {screenshot ? (
        <>
          <Image source={{ uri: screenshot }} style={styles.screenshotImage} />

          <Trash
            size={22}
            weight="fill"
            color={theme.colors.text_secondary}
            style={styles.removeIcon}
          />
        </>
      ) : (
        <Camera size={24} weight="bold" color={theme.colors.text_primary} />
      )}
    </TouchableOpacity>
  );
};
