import { formatDate } from "@/utils/common";
import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  return (
    <section className={Styles.large_section}>
      <Headline size="xl">Hasura test</Headline>
      <Headline size="m">&lt; Home &gt;</Headline>
      <p>{formatDate(new Date(), "yyyy/MM/dd/SSSSS")}</p>
    </section>
  );
};
