import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { COLORS } from "@/src/consts/colors"
import { Goal as GoalEnum } from "@/src/domain/profile/enums/goal"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { BicepsFlexed, PencilRuler, Salad } from 'lucide-react-native'
import { Pressable, Text, View } from "react-native"
import { OnboardingOption } from "../components/onboarding-option/onboarding-option"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useGoalHook } from "./hook"

export const Goal: React.FC = () => {
  const {
    handleChangeIOption,
    isAdjustDietSelected,
    isGainMuscleSelected,
    isLoseWeightSelected,
    isDisabledButton
  } = useGoalHook()

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
            <ProgressBar value={25} />
          </View>
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Qual direção melhor representa sua meta atual?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">Defina seu objetivo principal.</Text>
          </View>
          <View className="w-full gap-5">
            <OnboardingOption
              text='Ajustar minha dieta'
              icon={<Salad size={30} color={isAdjustDietSelected ? COLORS.white : COLORS.black} />}
              selected={isAdjustDietSelected}
              onPress={() => handleChangeIOption(GoalEnum.AdjustDiet)}
            />
            <OnboardingOption
              text='Ganhar massa'
              icon={<BicepsFlexed size={30} color={isGainMuscleSelected ? COLORS.white : COLORS.black} />}
              selected={isGainMuscleSelected}
              onPress={() => handleChangeIOption(GoalEnum.GainMuscle)}
            />
            <OnboardingOption
              text='Perder peso'
              icon={<PencilRuler size={30} color={isLoseWeightSelected ? COLORS.white : COLORS.black} />}
              selected={isLoseWeightSelected}
              onPress={() => handleChangeIOption(GoalEnum.LoseWeight)}
            />
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" disabled={isDisabledButton} />
        </View>
      </View>
    </Container>
  )
}