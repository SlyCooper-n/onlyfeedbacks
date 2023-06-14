import { WidgetContextValue } from "@/context";
import { useHideWidget } from "@/store";
import { Show } from "../config";

const modifierKeys: Record<
  WidgetContextValue["hideShortcut"]["modifierKey"],
  string
> = {
  altKey: "Alt",
  ctrlKey: "Ctrl",
  shiftKey: "Shift",
  none: "",
};

interface HideButtonProps {
  shortcut: {
    key: string;
    modifierKey: WidgetContextValue["hideShortcut"]["modifierKey"];
  };
}

export const HideButton = (props: HideButtonProps) => {
  const [, setHideWidget] = useHideWidget();

  return (
    <button
      onClick={() => setHideWidget(true)}
      className="hover:bg-base-100 flex w-full items-center justify-between rounded p-0.5 transition-colors"
    >
      Show/Hide widget
      <span className="bg-base-300 border-base-100 rounded border p-0.5 text-sm">
        <Show when={Boolean(props.shortcut.modifierKey)}>
          {modifierKeys[props.shortcut.modifierKey]} +{" "}
        </Show>

        {props.shortcut.key}
      </span>
    </button>
  );
};
