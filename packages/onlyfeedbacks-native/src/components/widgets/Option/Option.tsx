import { Image, ImageProps, Text, TouchableOpacity } from "react-native";
import { FeedbackType, useFeedback } from "../../../utils/feedbackContext";
import { styles } from "./Option.style";

interface OptionProps {
  title: string;
  image: ImageProps;
  type: FeedbackType;
}

export const Option = ({ title, image, type }: OptionProps) => {
  const { selectFeedbackType } = useFeedback();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => selectFeedbackType(type)}
    >
      <Image source={image} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
