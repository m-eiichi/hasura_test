import { z } from "zod";
import { useCustomForm } from "@/hooks/useCustomForm";
import { Headline } from "@/components/ui_elements/headline";
import { InputButton } from "@/components/ui_elements/input/button";
import Styles from "./search_area.module.css";
import { formSchema } from "./schemas";
import { SearchAreaProps } from "./types";
import { SelectCountry } from "@/components/features/select/select_country";
import { SelectLang } from "@/components/features/select/select_lang";

export const SearchArea = (props: SearchAreaProps) => {
  const { handleRequirementsChange } = props;

  const defaultValues = {
    country: "",
    lang: "",
  };
  const { register, handleSubmit } = useCustomForm(formSchema, defaultValues);
  type FormSchema = z.infer<typeof formSchema>;

  const onSubmit = (data: FormSchema) => {
    handleRequirementsChange(data);
  };

  return (
    <section className={Styles.search_area}>
      <Headline size="xxs" marginNone>
        検索条件
      </Headline>

      <form className={Styles.search_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.search_main}>
          <div className={Styles.search_name}></div>
          <div className={Styles.search_country_city_lang}>
            <SelectCountry register={register("country")} noErrorAreaFixed />
            <SelectLang register={register("lang")} noErrorAreaFixed />
          </div>
        </div>
        <InputButton value="検索" type="submit" size="s" />
      </form>
    </section>
  );
};
