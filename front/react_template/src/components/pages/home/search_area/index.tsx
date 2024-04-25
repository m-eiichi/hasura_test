import { z } from "zod";
import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";
import { useCustomForm } from "@/hooks/useCustomForm";
import { Headline } from "@/components/ui_elements/headline";
import { Edit } from "@/components/ui_parts/input/edit";
import { Select } from "@/components/ui_parts/input/select";
import { InputButton } from "@/components/ui_elements/input/button";
import Styles from "./search_area.module.css";
import { formSchema } from "./schemas";

type FetchData = {
  country: {
    name: string;
    capital: string;
  }[];
};

export const SearchArea = () => {
  const { data } = useSWR<FetchData>(
    `
    query getCountry {
      country {
        name
        capital
      }
    }
      `,
    fetcher,
  );

  const city_option = data?.country.map((country) => {
    return {
      text: country.name,
      value: country.capital,
    };
  });
  const defaultValues = {
    first_name: "",
    last_name: "",
    country: "",
    lang: "",
  };
  const { register, handleSubmit } = useCustomForm(formSchema, defaultValues);
  type FormSchema = z.infer<typeof formSchema>;
  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <section className={Styles.search_area}>
      <Headline size="xs" marginNone>
        検索条件
      </Headline>

      <form className={Styles.search_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.search_main}>
          <div className={Styles.search_name}>
            <Edit
              name="first_name"
              label="first name"
              size="m"
              placeholder="苗字"
              register={register("first_name")}
            />
            <Edit
              name="last_name"
              label="last name"
              size="m"
              placeholder="名前"
              register={register("last_name")}
            />
          </div>
          <div className={Styles.search_country_city_lang}>
            <Select
              name="country"
              label="country"
              size="m"
              options={city_option}
              register={register("country")}
            />
            <Select
              name="lang"
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
              register={register("lang")}
            />
          </div>
        </div>
        <InputButton value="検索" type="submit" />
      </form>
    </section>
  );
};
