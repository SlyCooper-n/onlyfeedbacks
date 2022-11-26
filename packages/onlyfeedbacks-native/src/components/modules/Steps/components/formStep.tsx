import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { theme } from "../../../../theme";
import { useFeedback } from "../../../../utils/feedbackContext";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { Button } from "../../../widgets/Button";
import { ScreenshotBtn } from "../../../widgets/ScreenshotBtn";
import { styles } from "../Steps.style";

export const FormStep = () => {
  const { feedbackType, returnBack, sendFeedback, feedbackSending } =
    useFeedback();
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType!];

  return (
    <>
      <View style={styles.formHeader}>
        <TouchableOpacity onPress={returnBack} style={styles.arrowLeft}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.formHeaderTitle}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.formHeaderImage}
          />

          <Text style={styles.formHeaderText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <View style={styles.formBody}>
        <TextInput
          multiline
          placeholder={feedbackTypeInfo.placeholder}
          placeholderTextColor={theme.colors.text_secondary}
          value={comment}
          // onChange={(e) => setComment(e.nativeEvent.text)}
          onChangeText={setComment}
          style={styles.input}
        />

        <View style={styles.buttons}>
          <ScreenshotBtn />

          <Button
            isLoading={feedbackSending}
            disabled={comment.trim() === "" ? true : false}
            onPress={() => sendFeedback(comment)}
          >
            <Text style={styles.sendBtnText}>Send feedback</Text>
          </Button>
        </View>
      </View>
    </>
  );
};
