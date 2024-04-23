import { useEffect, type ReactElement } from "react";

import { z } from "zod";
import { createRadioValidate } from "@/utils/validation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButtons } from "../..";

import { RadioButtonsRhfForSbProps } from "./types";

/**
 * RadioButtonsコンポーネント作成
 *
 * @property props : RadioButtonsRhfForSbProps
 * @returns StoryBook用のコンポーネント
 */
export const RadioButtonsRhf = (
  props: RadioButtonsRhfForSbProps, // props: RadioButtonsRhfForSbProps,
): ReactElement => {
  const { label, requirement, supportText, name, size, items, vertical, tile } =
    props;
  const zod_rule = "test";
  const z_obj: any = z.object({ [zod_rule]: createRadioValidate({ name }) });

  type Schema = z.infer<typeof z_obj>;

  const {
    register,
    formState: { errors },
    trigger,
  } = useForm<Schema>({
    defaultValues: { [zod_rule]: "" },
    resolver: zodResolver(z_obj),
    mode: "onTouched",
  });

  useEffect(() => {
    trigger(zod_rule);
  });

  return (
    <>
      <RadioButtons
        label={label}
        requirement={requirement}
        supportText={supportText}
        name={name}
        size={size}
        items={items}
        register={register(zod_rule)}
        errors={errors[zod_rule]}
        vertical={vertical}
        tile={tile}
      />
    </>
  );
};
