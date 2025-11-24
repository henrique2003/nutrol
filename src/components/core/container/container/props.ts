import { ComponentProps } from "react";
import { View } from "react-native";

export type ContainerProps = ComponentProps<typeof View> & {
  outsideClassName?: string
}