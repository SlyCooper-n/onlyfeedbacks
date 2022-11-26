import { Image, Text, TouchableOpacity, View } from "react-native";
import successImg from "../../../../assets/success.png";
import { useFeedback } from "../../../../utils/feedbackContext";
import { styles } from "../Steps.style";

export const SuccessStep = () => {
  const { restartFeedback } = useFeedback();

  return (
    <>
      <View style={styles.successHeader}>
        <Image source={successImg} style={styles.successImg} />

        <Text style={styles.successText}>We appreciate your feedback!</Text>
      </View>

      <TouchableOpacity onPress={restartFeedback} style={styles.successBtn}>
        <Text style={styles.sendAnotherBtnText}>
          I want to send another one
        </Text>
      </TouchableOpacity>
    </>
  );
};
