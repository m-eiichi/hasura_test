import { Headline } from "@/components/ui_elements/headline";
import { Edit } from "@/components/ui_parts/input/edit";
import { Select } from "@/components/ui_parts/input/select";
import { InputButton } from "@/components/ui_elements/input/button";
import Styles from "./search_area.module.css";

export const SearchArea = () => {
  return (
    <section className={Styles.search_area}>
      <Headline size="xs" marginNone>
        検索条件
      </Headline>

      <form className={Styles.search_form}>
        <div className={Styles.search_main}>
          <div className={Styles.search_name}>
            <Edit label="first name" size="m" placeholder="苗字" />
            <Edit label="last name" size="m" placeholder="名前" />
          </div>
          <div className={Styles.search_country_city_lang}>
            <Select
              label="country"
              size="m"
              options={[
                {
                  text: "国",
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
                  text: "市町村",
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
          <Select
            label="lang"
            size="m"
            options={[
              {
                text: "公用語",
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
        <InputButton value="検索" />
      </form>
    </section>
  );
};
