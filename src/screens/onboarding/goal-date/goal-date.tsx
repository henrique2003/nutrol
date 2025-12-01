import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { GoalDate as GoalDateEnum } from "@/src/domain/profile/enums/goal-date.enum"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { OnboardingOption } from "../components/onboarding-option/onboarding-option"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useGoalDateHook } from "./hook"

export const GoalDate: React.FC = () => {
  const {
    handleChangeIOption,
    handleClickContinue,
    isForeverSelected,
    isOneMonthSelected,
    isSixMonthsPlusSelected,
    isThreeMonthsSelected,
    isDisabledButton
  } = useGoalDateHook()

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
            <ProgressBar value={37.5} />
          </View>
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Em quanto tempo você deseja alcançar esse objetivo?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">Escolha o momento da sua conquista.</Text>
          </View>
          <View className="w-full gap-3">
            <OnboardingOption
              text='1 Mês'
              selected={isOneMonthSelected}
              onPress={() => handleChangeIOption(GoalDateEnum.OneMonth)}
            />
            <OnboardingOption
              text='3 Meses'
              selected={isThreeMonthsSelected}
              onPress={() => handleChangeIOption(GoalDateEnum.ThreeMonths)}
            />
            <OnboardingOption
              text='6 Meses+'
              selected={isSixMonthsPlusSelected}
              onPress={() => handleChangeIOption(GoalDateEnum.SixMonthsPlus)}
            />
            <OnboardingOption
              text='Para a vida toda'
              selected={isForeverSelected}
              onPress={() => handleChangeIOption(GoalDateEnum.Forever)}
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