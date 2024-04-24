import { type ReactElement } from "react";
// import { useState,type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { SearchArea } from "./search_area";
import { SearchResultArea } from "./search_result_area";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  // const [query,setQuery]=useState("")
  return (
    <section className={Styles.content}>
      <Headline size="xl">Hasura test</Headline>
      <SearchArea />
      <SearchResultArea />
    </section>
  );
};
