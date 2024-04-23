export type EditRhfForSbProps = {
  type: "number" | "text" | "tel" | "email" | "password" | "url" | "datetime-local" | "date";
  name?: string;
  min?: number;
  max?: number;
  req_number?: boolean;
  req_char?: boolean;
  req_symbol?: boolean;
};
