import { z } from "zod";
import { type ReactElement } from "react";

import { Headline } from "@/components/ui_elements/headline";
import { Button } from "@/components/ui_elements/button";
import { useCustomForm } from "@/hooks/useCustomForm";
import { Edit } from "@/components/ui_parts/input/edit";
import { TextArea } from "@/components/ui_parts/input/textarea";
import { Select } from "@/components/ui_parts/input/select";
import { CheckBoxes } from "@/components/ui_parts/input/check_boxes";
// import { RadioButtons } from "@/components/ui_parts/input/radiobuttons";
// import { InputButton } from "@/components/ui_parts/input/button";

import { customDialogSchema } from "./schemas";
import { CustomDialogProps } from "./types";
import Styles from "./custom_dialog_content.module.css";

const options = [
  { text: "選択してください", value: "" },
  { text: "aaa", value: "aaa" },
  { text: "bbb", value: "bbb" },
  { text: "ccc", value: "ccc" },
  { text: "ddd", value: "ddd" },
  { text: "eee", value: "eee" },
  { text: "fff", value: "fff" },
];

const checkbox_item = [
  {
    id: "0",
    text: "寿司",
    value: "sushi",
    checked: true,
  },
  {
    id: "1",
    text: "焼肉",
    value: "yakiniku",
    disabled: true,
  },
  {
    id: "2",
    text: "カオマンガイ",
    subtext: "kao_mangai",
    value: "khao_mangai",
  },
];

// const radiobuttons_item = [
//   {
//     id: "ra_01",
//     text: "寿司",
//     subText: "sushi",
//     value: "sushi",
//     checked: true,
//   },
//   {
//     id: "ra_02",
//     text: "焼肉",
//     subText: "yakiniku",
//     value: "yakiniku",
//     disabled: true,
//   },
//   {
//     id: "ra_03",
//     text: "カオマンガイ",
//     subText: "kao_mangai",
//     value: "khao_mangai",
//   },
// ];

const defaultValues = {
  number: "",
  email: "",
  tel: "",
  date: "",
  textarea: "",
  select: "",
  checkbox: [],
  radiobuttons: "",
};

export const CustomDialogContent = (props: CustomDialogProps): ReactElement => {
  const { send, cancel } = props;
  const { register, handleSubmit, errors } = useCustomForm(
    customDialogSchema,
    defaultValues,
  );
  type CustomDialogSchema = z.infer<typeof customDialogSchema>;
  const onSubmit = (data: CustomDialogSchema) => {
    console.log(data);
    send && send();
  };

  return (
    <div className={Styles.inner}>
      <Headline size="s" marginNone>
        Custom Dialog
      </Headline>
      <form className={Styles.form} onSubmit={handleSubmit(onSubmit)}>
        <ul className={Styles.form__list} role="list">
          <li>
            <Edit
              label="email"
              requirement
              supportText="サポートテキスト"
              id="email"
              type="email"
              placeholder="placeholder"
              fullWidth
              name="email"
            />
          </li>
          <li>
            <Edit
              label="number"
              requirement
              supportText="サポートテキスト"
              id="number"
              type="number"
              placeholder="placeholder"
              name="number"
            />
          </li>
          <li>
            <Edit
              label="tel"
              requirement
              supportText="サポートテキスト"
              id="tel"
              type="tel"
              placeholder="placeholder"
              name="tel"
            />
          </li>
          <li>
            <Edit
              label="date"
              requirement
              supportText="サポートテキスト"
              id="date"
              type="date"
              name="date"
            />
          </li>
          <li>
            <Headline size="xs">Text Area</Headline>
            <TextArea
              label="text area"
              supportText="サポートテキスト"
              id="textarea"
              placeholder="placeholder"
              rows={10}
              cols={100}
              name="textarea"
            />
          </li>
          <li>
            <Headline size="xs">Select</Headline>
            <Select
              label="select"
              supportText="サポートテキスト"
              id="select"
              options={options}
              name="select"
            />
          </li>
          <li>
            <Headline size="xs">Check Box</Headline>
            <CheckBoxes
              supportText="1つ以上選択（複数選択可）"
              name="checkbox"
              register={register("checkbox")}
              items={checkbox_item}
              errors={errors.checkbox}
            />
          </li>
          {/* <li>
            <Headline size="xs">Radio Box</Headline>
            <RadioButtons
              label={{
                text: "radiobuttons default",
                requirement: true,
              }}
              supportText="いずれかひとつ選択してください"
              register={register("radiobuttons")}
              items={radiobuttons_item}
              errors={errors.radiobuttons}
            />
          </li>
          <li>
            <InputButton
              type="submit"
              color="primary"
              value="Submit"
              fullWidth
            />
          </li> */}
        </ul>
      </form>
      <Button fullWidth onClick={cancel}>
        Cancel
      </Button>
    </div>
  );
};
