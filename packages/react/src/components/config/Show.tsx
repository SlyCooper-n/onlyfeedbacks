import { PropsWithChildren } from "react";

interface ShowProps extends PropsWithChildren {
  when: boolean;
}

export const Show = (props: ShowProps) => {
  return props.when ? <>{props.children}</> : null;
};
