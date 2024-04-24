import { useEffect, type ReactElement } from "react";

import { z } from "zod";
import {
  createAnyValidate,
  createDateTimeValidate,
  createEmailValidate,
  createNumberValidate,
  createPasswordValidate,
  createTextValidate,
  createUrlValidate,
} from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "../..";

import { EditRhfForSbProps } from "./types";

/**
 * バリデーション生成
 *
 * @param name
 * @param type
 * @returns validation
 */
function createZodObj(zod_rule: string, props: EditRhfForSbProps) {
  const { type, name, min, max, req_char, req_number, req_symbol } = props;
  switch (type) {
    case "text":
    case "tel":
      return z.object({
        [zod_rule]: createTextValidate({
          input_type: type === "tel" ? "tel" : "text",
          name,
          min_length: min,
          max_length: max,
        }),
      });
    case "number":
      return z.object({ [zod_rule]: createNumberValidate({ name, min, max }) });
    case "email":
      return z.object({
        [zod_rule]: createEmailValidate({
          name,
          min_length: min,
          max_length: max,
        }),
      });
    case "password":
      return z.object({
        [zod_rule]: createPasswordValidate({
          name,
          min_length: min,
          max_length: max,
          req_char,
          req_number,
          req_symbol,
        }),
      });
    case "url":
      return z.object({
        [zod_rule]: createUrlValidate({ name, max_length: max }),
      });
    case "date":
    case "datetime-local":
      return z.object({ [zod_rule]: createDateTimeValidate({ name }) });
    default:
      return z.object({ [zod_rule]: createAnyValidate() });
  }
}

/**
 * Editコンポーネント作成
 *
 * @param props : InputElementWrapperProps
 * @returns StoryBook用のラッパーコンポーネント
 */
export const EditRhf = (props: EditRhfForSbProps): ReactElement => {
  const zod_rule = "test";
  const z_obj = createZodObj(zod_rule, props);

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <>
      <Edit
        label="ラベルテキスト"
        requirement
        supportText="サブテキスト"
        name={zod_rule}
        type={props.type}
        register={register(zod_rule)}
        errors={errors[zod_rule]}
      />
    </>
  );
};
