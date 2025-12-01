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
        `w-full rounded-xl flex-row justify-start items-center gap-3 px-4 h-[60px] ${selected ? 'bg-black' : 'bg-lightGrey'}`
      }
      {...rest}
    >
      {icon}
      <Text className={`text-md font-bold ${selected ? 'text-white' : 'text-black'}`}>
        {text}{' '}
        {subtext && (
          <Text className={`font-semibold ${selected ? 'text-white' : 'text-grey'}`}>({subtext})</Text>
        )}
      </Text>
    </TouchableOpacity>
  )
}
