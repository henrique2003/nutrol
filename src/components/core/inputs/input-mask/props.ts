import { ComponentProps } from "react";
import { TextInput } from "react-native";

export type InputMaskProps = ComponentProps<typeof TextInput> & {
  mask: string;
  sufix?: string;
}