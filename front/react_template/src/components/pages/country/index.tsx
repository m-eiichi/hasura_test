import { useSearchParams } from "react-router-dom";
import { ReactElement } from "react";
import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";
import { Headline } from "@/components/ui_elements/headline";
import { FullWidthContent } from "@/components/templates/full_width_content";

type FetchDataTypes = {
  country: {
    name: string;
    capital: string;
    surfacearea: string;
    region: string;
    population: string;
    localname: string;
    lifeexpectancy: string;
    indepyear: string;
    headofstate: string;
    governmentform: string;
    gnp: string;
  }[];
};
export const Country = (): ReactElement => {
  const [searchParams] = useSearchParams();
  const conutryName = searchParams.get("name");

  const searchLangQuery = `
        query getCoutryByLangQuery{
          country (where: {name: {_eq: "${conutryName}"}}) {
            name
            capital
            surfacearea
            region
            population
            localname
            lifeexpectancy
            indepyear
            headofstate
            governmentform
            gnp
          }
        }
      `;

  const { data } = useSWR<FetchDataTypes>(searchLangQuery, fetcher);
  return (
    <>
      <Headline size="xl" as="h1">
        {conutryName}({data?.country[0].localname})
      </Headline>
      <FullWidthContent>
        <dl>
          <dt>資本</dt>
          <dd>{data?.country[0].capital}</dd>
          <dt>面積</dt>
          <dd>{data?.country[0].surfacearea}平方キロメートル</dd>
          <dt>地域</dt>
          <dd>{data?.country[0].region}</dd>
          <dt>人口</dt>
          <dd>{data?.country[0].population}</dd>
          <dt>平均余命</dt>
          <dd>{data?.country[0].lifeexpectancy}</dd>
          <dt>独立年</dt>
          <dd>{data?.country[0].indepyear}</dd>
          <dt>リーダー</dt>
          <dd>{data?.country[0].headofstate}</dd>
          <dt>政治体制</dt>
          <dd>{data?.country[0].governmentform}</dd>
          <dt>GDP</dt>
          <dd>{data?.country[0].gnp}</dd>
        </dl>
      </FullWidthContent>
    </>
  );
};
