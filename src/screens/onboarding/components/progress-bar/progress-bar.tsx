import { View } from "react-native"
import { ProgressBarProps } from "./props"

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <View className="w-full bg-grey300 h-[2px]">
      <View className="bg-green h-[2px]" style={{ width: `${value}%` }}></View>
    </View>
  )
}
