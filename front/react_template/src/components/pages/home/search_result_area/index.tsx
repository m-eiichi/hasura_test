import { Headline } from "@/components/ui_elements/headline";
import { Button } from "@/components/ui_elements/button";
import Styles from "./search_result_area.module.css";

export const SearchResultArea = () => {
  return (
    <section className={Styles.search_result_area}>
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
  );
};
