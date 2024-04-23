import { z } from "zod";
import { 
    createEmailValidate,
    createNumberValidate,
    createTextValidate,
    createDateTimeValidate,
    createSelectValidate,
    createCheckBoxValidate,
    createRadioValidate 
} from "@/utils/validation";

export const customDialogSchema = z.object({
    email: createEmailValidate({ name: "メールアドレス" }),
    number: createNumberValidate({ name: "", min: 0, max: 10 }),
    tel: createTextValidate({ input_type: "tel" }),
    date: createDateTimeValidate({}),
    textarea: createTextValidate({}),
    select: createSelectValidate({}),
    checkbox: createCheckBoxValidate({}),
    radiobuttons: createRadioValidate({}),
  });