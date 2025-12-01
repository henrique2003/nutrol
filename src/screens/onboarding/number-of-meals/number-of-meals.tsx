import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { NumberOfMeals as NumberOfMealsEnum } from "@/src/domain/profile/enums/number-of-meals.enum"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { OnboardingOption } from "../components/onboarding-option/onboarding-option"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useNumberOfMealsHook } from "./hook"

export const NumberOfMeals: React.FC = () => {
  const {
    handleChangeIOption,
    handleClickContinue,
    isFivePlusSelected,
    isFourSelected,
    isThreeSelected,
    isTwoSelected,
    isDisabledButton
  } = useNumberOfMealsHook()

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
            <ProgressBar value={50} />
          </View>
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Quantas refeições você costuma fazer por dia?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">O que encaixa na sua rotina.</Text>
          </View>
          <View className="w-full gap-3">
            <OnboardingOption
              text='2'
              selected={isTwoSelected}
              onPress={() => handleChangeIOption(NumberOfMealsEnum.Two)}
            />
            <OnboardingOption
              text='3'
              selected={isThreeSelected}
              onPress={() => handleChangeIOption(NumberOfMealsEnum.Three)}
            />
            <OnboardingOption
              text='4'
              selected={isFourSelected}
              onPress={() => handleChangeIOption(NumberOfMealsEnum.Four)}
            />
            <OnboardingOption
              text='5 ou mais'
              selected={isFivePlusSelected}
              onPress={() => handleChangeIOption(NumberOfMealsEnum.FivePlus)}
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