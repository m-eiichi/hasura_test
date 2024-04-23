import { type ReactElement } from "react";

import { PropsType } from "./types";
import Styles from "./main_layout_content.module.css";

export const MainLayoutContent = (props: PropsType): ReactElement => {
  return (
    <section className={Styles.content}>
      {/* <BreadCrumbs breadcrumbRefs={props.breadcrumbRefs} />
      <WarningBar /> */}
      <main>
        <div className={Styles.inner}>{props.children}</div>
      </main>
    </section>
  );
};
