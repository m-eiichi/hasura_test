import { useState, type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { SearchArea } from "./search_area";
import { SearchResultArea } from "./search_result_area";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  const [querySrc, setQuerySrc] = useState({ lang: "" });
  const handleRequirementsChange = (data: any) => {
    setQuerySrc(data);
  };
  return (
    <>
      <Headline size="xl" as="h1">
        Hasura test
      </Headline>
      <section className={Styles.main_content}>
        <SearchArea handleRequirementsChange={handleRequirementsChange} />
        <SearchResultArea querySrc={querySrc} />
      </section>
    </>
  );
};
