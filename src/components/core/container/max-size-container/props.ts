import { ComponentProps } from "react"
import { View } from "react-native"

export type MaxSizeContainerProps = ComponentProps<typeof View> & {
  outsideClassName?: string
}