import { Slot } from "@radix-ui/react-slot";
import { HTMLAttributes } from "react";
import c from "tm-cl";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export const Container = ({ asChild, ...props }: ContainerProps) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={c(
        "bg-base-200 relative flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl p-4 shadow-lg md:w-auto md:min-w-[256px]",
        props.className,
      )}
    />
  );
};
