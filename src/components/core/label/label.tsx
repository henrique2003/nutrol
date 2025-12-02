import { Text } from "react-native"
import { LabelProps } from "./props"

export const Label: React.FC<LabelProps> = ({ text }) => {
  return (
    <Text className="text-black text-lg font-medium">{text}</Text>
  )
}
