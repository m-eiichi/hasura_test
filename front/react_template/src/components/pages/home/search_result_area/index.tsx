import { useMemo, type ReactElement } from "react";
import {
  ColumnDef,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";

import { TableRT } from "@/components/ui_parts/table/table_rt";

import Styles from "./search_result_area.module.css";
import { SearchResultAreaProps } from "./types";

type DataTypes = {
  name: string;
  capital: string;
  surfacearea: string;
  region: string;
  population: string;
  localname: string;
  lifeexpectancy: string;
  indepyear: string;
  governmentform: string;
  gnp: string;
};

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
    governmentform: string;
    gnp: string;
  }[];
};

export const SearchResultArea = (
  props: SearchResultAreaProps,
): ReactElement => {
  const { querySrc } = props;

  const columnHelper = createColumnHelper<DataTypes>();

  const columns: ColumnDef<DataTypes, any>[] = [
    columnHelper.accessor("name", {
      header: "国名",
      id: "country",
      enableSorting: true,
      size: 400, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("capital", {
      header: "資本",
      id: "capital",
      enableSorting: true,
      size: 75, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("surfacearea", {
      header: "面積",
      id: "surfacearea",
      enableSorting: true,
      size: 100, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
    columnHelper.accessor("region", {
      header: "地域",
      id: "region",
      enableSorting: false,
      size: 250, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("population", {
      header: "人口",
      id: "population",
      enableSorting: true,
      size: 100, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("localname", {
      header: "ローカル名",
      id: "localname",
      enableSorting: false,
      size: 400, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("lifeexpectancy", {
      header: "平均寿命",
      id: "lifeexpectancy",
      enableSorting: true,
      size: 125, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("indepyear", {
      header: "独立年",
      id: "indepyear",
      enableSorting: true,
      size: 125, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("governmentform", {
      header: "政治体制",
      id: "governmentform",
      enableSorting: false,
      size: 300, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),

    columnHelper.accessor("gnp", {
      header: "GNP",
      id: "gnp",
      enableSorting: true,
      size: 100, //sizingを行っているため（display:table-flexを使用）設定が必要
    }),
  ];

  // 検索条件where句部分

  // country
  const lang =
    querySrc.lang !== ""
      ? 'countrylanguages: {language: {_eq: "' + querySrc.lang + '"}}'
      : "";
  console.log(lang);
  const searchLangQuery =
    lang !== ""
      ? `
        query getCoutryByLangQuery{
          country (where: {${lang}}) {
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
            gnpold
            gnp
          }
        }
      `
      : `
      query getCoutryByLangQuery{
        country {
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
          gnpold
          gnp
        }
      }`;
  const { data } = useSWR<FetchDataTypes>(searchLangQuery, fetcher);
  // dataのメモ化
  const replaceData: any[] = useMemo(
    () => (data?.country ? data.country : []),
    [data],
  );

  const table = useReactTable<DataTypes>({
    columns: columns,
    data: replaceData,
    columnResizeMode: "onChange",
    // onRowSelectionChange: rowClick,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <section className={Styles.search_result_area}>
      <TableRT tableInstance={table} size="s" tableHeight="350px" />
    </section>
  );
};
