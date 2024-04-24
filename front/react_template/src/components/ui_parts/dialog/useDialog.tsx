import { useCallback, useState, type ReactElement, type FC } from "react";

import { Dialog as Component } from ".";

type Props = Omit<Parameters<typeof Component>[0], "isOpen">;

type Result = {
  open: VoidFunction;
  close: VoidFunction;
  Dialog: FC<Props>;
};

export const useDialog = (): Result => {
  const [isOpen, setOpen] = useState<boolean>();

  const open: VoidFunction = useCallback((): void => {
    setOpen(true);
  }, []);

  const close: VoidFunction = useCallback((): void => {
    setOpen(false);
  }, []);

  const Dialog: FC<Props> = useCallback(
    (props: Props): ReactElement => {
      return <Component isOpen={isOpen} {...props} />;
    },
    [isOpen],
  );

  return { open, close, Dialog };
};
