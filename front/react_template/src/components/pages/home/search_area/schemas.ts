import { z } from "zod";
import { createAnyValidate, createSelectValidate } from "@/utils/validation";

export const formSchema = z.object({
  first_name: createAnyValidate(),
  last_name: createAnyValidate(),
  country: createSelectValidate({}),
  city: createSelectValidate({}),
  lang: createSelectValidate({}),
});
