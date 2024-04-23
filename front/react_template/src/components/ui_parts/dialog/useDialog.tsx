import { useCallback, useState, type ReactElement, type FC } from "react";

import { Dialog as Component } from ".";

type Props = Omit<Parameters<typeof Component>[0], "isOpen" | "dialogName">;

type Result = {
  open: VoidFunction;
  close: VoidFunction;
  Dialog: FC<Props>;
};

export const useDialog = (dialogName: string): Result => {
  const [isOpen, setOpen] = useState<string>("");

  const open: VoidFunction = useCallback((): void => {
    setOpen(dialogName);
  }, [dialogName]);

  const close: VoidFunction = useCallback((): void => {
    setOpen("");
  }, []);

  const Dialog: FC<Props> = useCallback(
    (props: Props): ReactElement => {
      return <Component isOpen={isOpen} dialogName={dialogName} {...props} />;
    },
    [isOpen, dialogName],
  );

  return { open, close, Dialog };
};
