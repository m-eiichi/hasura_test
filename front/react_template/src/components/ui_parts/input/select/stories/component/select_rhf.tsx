import { useEffect, type ReactElement } from "react";
import { z } from "zod";
import { createSelectValidate } from "@/utils/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select } from "../..";
import { SelectRhfForSbProps } from "./types";

/**
 * Editコンポーネント作成
 *
 * @property props : InputElementWrapperProps
 * @returns StoryBook用のラッパーコンポーネント
 */
export const SelectRhf = (props: SelectRhfForSbProps): ReactElement => {
  const { label, requirement, supportText, size, min, options, defaultvalue } =
    props;

  const zodRule = "test";
  const z_obj = z.object({ [zodRule]: createSelectValidate({ min }) });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Schema>({
    defaultValues: { [zodRule]: "" },
    resolver: zodResolver(z_obj),
    mode: "onBlur",
  });

  useEffect(() => {
    trigger(zodRule);
  });

  return (
    <Select
      label={label}
      requirement={requirement}
      supportText={supportText}
      name={zodRule}
      size={size}
      options={options}
      register={register(zodRule)}
      errors={errors[zodRule]}
      defaultvalue={defaultvalue}
    />
  );
};
