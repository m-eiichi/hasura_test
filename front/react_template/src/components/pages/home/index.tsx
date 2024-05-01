import { useState, type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { SearchArea } from "./search_area";
import { SearchResultArea } from "./search_result_area";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  const [querySrc, setQuerySrc] = useState({ country: "", lang: "" });
  const handleRequirementsChange = (data: any) => {
    setQuerySrc(data);
  };
  return (
    <section className={Styles.content}>
      <div className={Styles.headline_wrap}>
        <Headline size="xl" marginNone as="h1">
          Hasura test
        </Headline>
      </div>
      <div className={Styles.search_area_wrap}>
        <SearchArea handleRequirementsChange={handleRequirementsChange} />
      </div>
      <div className={Styles.search_area_wrap}>
        <SearchResultArea querySrc={querySrc} />
      </div>
    </section>
  );
};
