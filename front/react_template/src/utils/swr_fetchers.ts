import { request } from "graphql-request";

// スターウォーズ(テストケース)
export const fetcher = <T>(query: string): Promise<T> =>
  request("http://localhost:8080/v1/graphql", query);
