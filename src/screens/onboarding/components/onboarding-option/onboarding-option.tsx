import { Text, TouchableOpacity } from "react-native"
import { OnboardingOptionProps } from "./props"

export const OnboardingOption: React.FC<OnboardingOptionProps> = ({
  icon,
  subtext,
  text,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className="bg-lightGrey w-full rounded-lg flex-row justify-start items-center gap-2 px-4 h-[45px]"
    >
      {icon}
      <Text className="text-sm font-semibold text-black">
        {text}{' '}
        <Text className="text-grey font-normal">({subtext})</Text>
      </Text>
    </TouchableOpacity>
  )
}
