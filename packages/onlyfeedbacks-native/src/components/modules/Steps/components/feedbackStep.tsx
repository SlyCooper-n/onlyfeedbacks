import { Text, View } from "react-native";
import { FeedbackType } from "../../../../utils/feedbackContext";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { Option } from "../../../widgets/Option";
import { styles } from "../Steps.style";

export const FeedbackStep = () => {
  return (
    <>
      <Text style={styles.title}>Leave your Feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              type={key as FeedbackType}
            />
          );
        })}
      </View>
    </>
  );
};
