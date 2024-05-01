import { z } from "zod";
import { createSelectValidate } from "@/utils/validation";

export const formSchema = z.object({
  country: createSelectValidate({}),
  lang: createSelectValidate({ min: -1 }),
});
