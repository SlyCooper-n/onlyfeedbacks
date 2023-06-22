import { useAtom } from "jotai";

import { WidgetContextValue } from "@/context";
import { useWidgetContext } from "@/hooks";
import { hideWidgetAtom } from "@/store";
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

export const HideButton = () => {
  const { hideShortcut } = useWidgetContext();
  const [, setHideWidget] = useAtom(hideWidgetAtom);

  return (
    <button
      onClick={() => setHideWidget(true)}
      className="hover:bg-of-base-100 flex w-full items-center justify-between rounded p-0.5 transition-colors"
    >
      Show/Hide widget
      <span className="bg-of-base-300 border-of-base-100 rounded border p-0.5 text-xs">
        <Show when={hideShortcut.modifierKey !== "none"}>
          {modifierKeys[hideShortcut.modifierKey]} +{" "}
        </Show>

        {hideShortcut.key}
      </span>
    </button>
  );
};
