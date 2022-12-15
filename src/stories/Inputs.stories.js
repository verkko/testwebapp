import { Input } from "components";
export default {
  title: "nathani_s_application10/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder12",
  variant: "FillWhiteA700",
  size: "sm",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
