import { useMemo } from "react";
import {
  createColumnHelper,
  // CellContext,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import useSWR from "swr";
import { fetcher } from "@/utils/swr_fetchers";
import { Headline } from "@/components/ui_elements/headline";
import { Button } from "@/components/ui_elements/button";
import { TableRT } from "@/components/ui_parts/table/table_rt";

import Styles from "./search_result_area.module.css";

type FetchData = {
  allFilms: {
    films: {
      title: string;
      director: string;
      releaseDate: string;
    }[];
  };
};
// createColumnHelper用
type StarWars = {
  title: string;
  director: string;
  releaseDate: string;
};

export const SearchResultArea = () => {
  const columnHelper = createColumnHelper<StarWars>();
  const columns = [
    columnHelper.accessor("title", {
      header: "Title",
      id: "title",
      enableSorting: false,
      size: 250,
    }),
    columnHelper.accessor("director", {
      header: "last name",
      id: "director",
      size: 150,
    }),

    columnHelper.accessor("releaseDate", {
      header: "Release Date",
      id: "release date",
      size: 500,
    }),
  ];

  const { data } = useSWR<FetchData>(
    `
      query Query {
        allFilms {
          films {
            title
            director
            releaseDate
          }
        }
      }
      `,
    fetcher,
  );

  // dataのメモ化
  const replaceData = useMemo(
    () =>
      data?.allFilms
        ? [...data.allFilms.films]
        : [{ title: "", director: "", releaseDate: "" }],
    [data],
  );

  const tableInstance = useReactTable({
    data: replaceData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
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
      <div className={Styles.search_result_main}>
        <TableRT tableInstance={tableInstance} size="m" />
      </div>
    </section>
  );
};
