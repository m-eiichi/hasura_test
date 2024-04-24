import { type ReactElement } from "react";
import { Headline } from "@/components/ui_elements/headline";
import { Edit } from "@/components/ui_parts/input/edit";
import { Select } from "@/components/ui_parts/input/select";
import { Button } from "@/components/ui_elements/button";
import Styles from "./home.module.css";

export const Home = (): ReactElement => {
  return (
    <section className={Styles.content}>
      <Headline size="xl">Hasura test</Headline>
      <section className={Styles.search_area}>
        <Headline size="xs" marginNone>
          検索条件
        </Headline>
        <div className={Styles.search_main}>
          <div className={Styles.search_name}>
            <Edit label="first name" size="m" />
            <Edit label="last name" size="m" />
          </div>
          <div className={Styles.search_country_city_lang}>
            <Select
              label="country"
              size="m"
              options={[
                {
                  text: "",
                  value: -1,
                },
                {
                  text: "選択肢1",
                  value: 1,
                },
                {
                  text: "選択肢2",
                  value: 2,
                },
                {
                  text: "選択肢3",
                  value: 3,
                },
              ]}
            />
            <Select
              label="city"
              size="m"
              options={[
                {
                  text: "",
                  value: -1,
                },
                {
                  text: "選択肢1",
                  value: 1,
                },
                {
                  text: "選択肢2",
                  value: 2,
                },
                {
                  text: "選択肢3",
                  value: 3,
                },
              ]}
            />
            <Select
              label="lang"
              size="m"
              options={[
                {
                  text: "",
                  value: -1,
                },
                {
                  text: "選択肢1",
                  value: 1,
                },
                {
                  text: "選択肢2",
                  value: 2,
                },
                {
                  text: "選択肢3",
                  value: 3,
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className={Styles.search_area}>
        <div className={Styles.search_result_header}>
          <Headline size="xs" marginNone>
            検索結果
          </Headline>
          <Button size="s" color="tertiary">
            新規登録
          </Button>
        </div>
        <div className={Styles.search_result_main}>table</div>
      </section>
    </section>
  );
};
