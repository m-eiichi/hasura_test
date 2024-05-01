import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";
import { type FieldValues } from "react-hook-form";
import { Select } from "@/components/ui_parts/input/select";

import { SelectCountryProps } from "./types";

type FetchData = {
  country: {
    name: string;
    code: string;
  }[];
};

export const SelectCountry = <T extends FieldValues>(
  props: SelectCountryProps<T>,
) => {
  const { register, noErrorAreaFixed } = props;
  const { data } = useSWR<FetchData>(
    `
    query getCountry {
      country {
        name
        code
      }
    }
      `,
    fetcher,
  );

  const city_option = data?.country.map((country) => {
    return {
      text: country.name,
      value: country.code,
    };
  });
  city_option?.unshift({ text: "--", value: "-1" });
  return (
    <Select
      name="country"
      label="country"
      size="s"
      options={city_option}
      register={register}
      noErrorAreaFixed={noErrorAreaFixed}
    />
  );
};
