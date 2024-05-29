import { z } from "zod";
import { createSelectValidate } from "@/utils/validation";

export const formSchema = z.object({
  lang: createSelectValidate({}),
});
