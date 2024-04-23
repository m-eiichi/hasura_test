import type { RefObject } from "react";

export const useModal = (dialogRef: RefObject<HTMLDialogElement>) => {
  return {
    open: () => {
      // .showModal() で開く
      dialogRef.current?.showModal();
    },
    close: () => {
      dialogRef.current?.close();
    },
  };
};
