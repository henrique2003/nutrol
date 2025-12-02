import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { ExercisesFrequency as ExercisesFrequencyEnum } from "@/src/domain/profile/enums/exercises-frequency.enum"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { OnboardingOption } from "../components/onboarding-option/onboarding-option"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useExercisesFrequencyHook } from "./hook"

export const ExercisesFrequency: React.FC = () => {
  const {
    handleChangeIOption,
    handleClickContinue,
    isDisabledButton,
    isFiveOrMoreTimesSelected,
    isNeverSelected,
    isOneToTwoTimesPerWeekSelected,
    isThreeToFourTimesPerWeekSelected
  } = useExercisesFrequencyHook()

  return (
    <Container>
      <View className="justify-between items-center mt-5 flex-1 w-full">
        <View className="flex-row justify-center items-center gap-2 w-full relative">
          <Pressable
            onPress={() => router.back()}
            className="absolute top-0 left-[-8px]"
          >
            <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
          </Pressable>
          <View className="w-full flex-row mt-4 max-w-[280px]">
            <ProgressBar value={62.5} />
          </View>
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Com que frequência você pratica exercícios?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">O quanto você se movimenta.</Text>
          </View>
          <View className="w-full gap-3">
            <OnboardingOption
              text='Nunca'
              selected={isNeverSelected}
              onPress={() => handleChangeIOption(ExercisesFrequencyEnum.Never)}
            />
            <OnboardingOption
              text='1-2 vezes por semana'
              selected={isOneToTwoTimesPerWeekSelected}
              onPress={() => handleChangeIOption(ExercisesFrequencyEnum.OneToTwoTimesPerWeek)}
            />
            <OnboardingOption
              text='3-4 vezes por semana'
              selected={isThreeToFourTimesPerWeekSelected}
              onPress={() => handleChangeIOption(ExercisesFrequencyEnum.ThreeToFourTimesPerWeek)}
            />
            <OnboardingOption
              text='5 ou mais vezes'
              selected={isFiveOrMoreTimesSelected}
              onPress={() => handleChangeIOption(ExercisesFrequencyEnum.FiveOrMoreTimes)}
            />
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" disabled={isDisabledButton} onPress={handleClickContinue} />
        </View>
      </View>
    </Container>
  )
}