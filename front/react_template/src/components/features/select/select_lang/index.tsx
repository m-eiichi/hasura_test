import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";
import { type FieldValues } from "react-hook-form";
import { Select } from "@/components/ui_parts/input/select";

import { SelectCountryProps } from "./types";

type FetchData = {
  countrylanguage: {
    language: string;
  }[];
};

export const SelectLang = <T extends FieldValues>(
  props: SelectCountryProps<T>,
) => {
  const { register, noErrorAreaFixed } = props;
  const { data } = useSWR<FetchData>(
    `
    query GetLanguage {
      countrylanguage {
        language
      }
    }
      `,
    fetcher,
  );

  const uniqueLang = Array.from(
    new Map(data?.countrylanguage.map((d) => [d.language, d])).values(),
  );

  const lang_option = uniqueLang.map((lang) => {
    return {
      text: lang.language,
      value: lang.language,
    };
  });
  lang_option.unshift({ text: "--", value: "" });
  return (
    <Select
      name="lang"
      label="lang"
      size="s"
      options={lang_option}
      register={register}
      noErrorAreaFixed={noErrorAreaFixed}
    />
  );
};
