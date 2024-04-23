import { useEffect, type ReactElement } from "react";

import { TextArea } from "../../";
import { z } from "zod";
import { createTextValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextAreaRhfForSbProps } from "./types";

/**
 * Textareaコンポーネント生成
 *
 * @property props : TextAreaRhfForSbProps
 * @returns StoryBook用のコンポーネント
 */

export const TextareaRhf = (props: TextAreaRhfForSbProps): ReactElement => {
  const elm_name = "textarea";
  const {
    min_length,
    max_length,
    id,
    size,
    label,
    requirement,
    supportText,
    rows,
    cols,
    fullWidth,
    disabled,
    fixed,
  } = props;
  const z_obj: any = z.object({
    [elm_name]: createTextValidate({ name: "", min_length, max_length }),
  });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm<Schema>({
    defaultValues: { [elm_name]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(elm_name);
  });

  return (
    <>
      <TextArea
        id={id}
        size={size}
        label={label}
        requirement={requirement}
        supportText={supportText}
        register={register(elm_name)}
        errors={errors[elm_name]}
        rows={rows}
        cols={cols}
        fullWidth={fullWidth}
        disabled={disabled}
        fixed={fixed}
      />
    </>
  );
};
