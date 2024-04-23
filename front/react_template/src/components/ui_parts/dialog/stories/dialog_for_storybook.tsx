import { useEffect, useRef, ReactElement, FC } from "react";
import { DialogContent } from "@/components/ui_parts/dialog/dialog_content";
import { DialogProps } from "../types";
import Styles from "../dialog.module.css";

export const Dialog: FC<DialogProps> = ({ noOverlay,  isOpen = "", size }: DialogProps): ReactElement | null => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = [Styles.dialog, noOverlay === true ? Styles.noOverlay : "", size !== undefined ? Styles[`size_${size}`] : Styles.size_l];
  useEffect((): void => {
    const currentDialog = dialogRef.current;
    const openDialogElements = document.querySelectorAll("dialog[open]");

    currentDialog?.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
      }
    });

    if (!currentDialog) {
      return;
    }

    // stateが""でない場合（useDialogのopenが発動した時）
    if (isOpen !== "") {
      if (currentDialog.hasAttribute("open")) {
        return;
      }
      document.body.style.setProperty("overflow-y", "hidden");
      openDialogElements.forEach(function (element) {
        element.classList.remove(Styles["last_open_dialog"]);
      });
      currentDialog.classList.add(Styles["last_open_dialog"]);
      currentDialog.showModal();

      // stateが""の場合（useDialogのcloseが発動した時）
    } else {
      if (openDialogElements.length === 0) {
        document.body.style.setProperty("overflow-y", "auto");
      }
      currentDialog.classList.remove(Styles["last_open_dialog"]);
      // openしている最後のdialogにクラスを付与
      if (openDialogElements.length > 0) {
        openDialogElements[openDialogElements.length - 1].classList.add(Styles["last_open_dialog"]);
      }

      currentDialog.close();
    }
  }, [isOpen]);

  return (
    <dialog className={dialog.join(" ")} ref={dialogRef}>
      <div className={Styles.dialog_content}>
      <DialogContent 
        title="dialog title"
        desc="dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description dialog description"
        button01={{ children: "OK" }}
        button02={{ children: "Cancel" }}
      />
      </div>
    </dialog>
  );
};
