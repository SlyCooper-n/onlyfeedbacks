import { ReactNode } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./Button.style";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = ({
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={
        !disabled
          ? styles.container
          : [styles.container, styles.containerDisabled]
      }
      {...rest}
    >
      {isLoading ? <ActivityIndicator /> : children}
    </TouchableOpacity>
  );
};
