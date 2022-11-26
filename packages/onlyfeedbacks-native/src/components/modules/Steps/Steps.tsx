import { View } from "react-native";
import { useFeedback } from "../../../utils/feedbackContext";
import { Copyright } from "../../widgets/Copyright";
import { FeedbackStep, FormStep, SuccessStep } from "./components";
import { styles } from "./Steps.style";

export const Steps = () => {
  const { feedbackType, feedbackSent } = useFeedback();

  return (
    <View style={styles.container}>
      {!feedbackType && <FeedbackStep />}

      {feedbackType && !feedbackSent && <FormStep />}

      {feedbackSent && <SuccessStep />}

      <Copyright />
    </View>
  );
};
