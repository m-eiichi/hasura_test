import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { Button } from "@/components/ui_elements/button";

import { ModalDialogProps } from "./types";
import Styles from "./dialog_content.module.css";

export const DialogContent = ({ title, desc, button01, button02 }: ModalDialogProps): ReactElement => {
  return (
    <div className={Styles.inner}>
      <div className={Styles.text_area}>
        <Headline size="s" marginNone>
          {title}
        </Headline>
        <p>{desc}</p>
      </div>

      <div className={Styles.button_container}>
        <Button fullWidth onClick={button01.onClick}>
          {button01.children}
        </Button>
        {button02 && (
          <Button color="secondary" fullWidth onClick={button02.onClick}>
            {button02.children}
          </Button>
        )}
      </div>
    </div>
  );
};
