import { Text, TouchableOpacity } from "react-native"
import { OnboardingOptionProps } from "./props"

export const OnboardingOption: React.FC<OnboardingOptionProps> = ({
  icon,
  subtext,
  text,
  selected,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      className={
        `w-full rounded-lg flex-row justify-start items-center gap-2 px-4 h-[45px] ${selected ? 'bg-black' : 'bg-lightGrey'}`
      }
      {...rest}
    >
      {icon}
      <Text className={`text-sm font-semibold ${selected ? 'text-white' : 'text-black'}`}>
        {text}{' '}
        <Text className={`font-normal ${selected ? 'text-white' : 'text-grey'}`}>({subtext})</Text>
      </Text>
    </TouchableOpacity>
  )
}
