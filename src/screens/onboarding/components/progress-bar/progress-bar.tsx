import { View } from "react-native"
import { ProgressBarProps } from "./props"

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <View className="w-full bg-grey300 h-[1px]">
      <View className="bg-darkGreen h-[1px]" style={{ width: `${value}%` }}></View>
    </View>
  )
}
