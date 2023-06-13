import { atom, useAtom } from "jotai";

export const isWidgetOpenAtom = atom(false);
export const useWidgetToggler = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useAtom(isWidgetOpenAtom);

  return {
    isOpen: isWidgetOpen,
    toggle: () => setIsWidgetOpen(!isWidgetOpen),
    open: () => setIsWidgetOpen(true),
    close: () => setIsWidgetOpen(false),
  };
};

export const widgetFlowAtom = atom<string | null>(null);
export const useWidgetFlow = () => useAtom(widgetFlowAtom);

export const disableForSessionAtom = atom(false);
export const useDisableForSession = () => useAtom(disableForSessionAtom);
