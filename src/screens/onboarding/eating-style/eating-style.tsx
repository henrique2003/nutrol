import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { COLORS } from "@/src/consts/colors"
import { EatingStyle as EatingStyleEnum } from "@/src/domain/profile/enums/eating-style.enum"
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { Beef, LeafyGreen } from 'lucide-react-native'
import { Text, View } from "react-native"
import { OnboardingOption } from "../components/onboarding-option/onboarding-option"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useEatingStyleHook } from "./hook"

export const EatingStyle: React.FC = () => {
  const {
    handleChangeOption,
    isPesceratianSelected,
    isTradicionalSelected,
    isVeganSelected,
    isVegetarianaSelected,
    isDisabledButton,
    handleClickContinue
  } = useEatingStyleHook()

  return (
    <Container>
      <View className="justify-between items-center mt-5 flex-1 w-full">
        <View className="w-full flex-row mt-5">
          <ProgressBar value={12.5} />
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Você segue algum estilo alimentar específico?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">Escolha sua preferência.</Text>
          </View>
          <View className="w-full gap-3">
            <OnboardingOption
              text='Tradicional'
              subtext="sem restrições"
              icon={<Beef size={30} color={isTradicionalSelected ? COLORS.white : COLORS.black} />}
              selected={isTradicionalSelected}
              onPress={() => handleChangeOption(EatingStyleEnum.Traditional)}
            />
            <OnboardingOption
              text='Vegano'
              subtext="não consome nada animal"
              icon={<LeafyGreen size={30} color={isVeganSelected ? COLORS.white : COLORS.black} />}
              selected={isVeganSelected}
              onPress={() => handleChangeOption(EatingStyleEnum.Vegan)}
            />
            <OnboardingOption
              text='Vegetariano'
              subtext="não consome carne"
              icon={<MaterialCommunityIcons name="egg-fried" size={30} color={isVegetarianaSelected ? COLORS.white : COLORS.black} />}
              selected={isVegetarianaSelected}
              onPress={() => handleChangeOption(EatingStyleEnum.Vegetarian)}
            />
            <OnboardingOption
              text='Pescetariano'
              subtext="peixe apenas"
              icon={<Ionicons name="fish-outline" size={30} color={isPesceratianSelected ? COLORS.white : COLORS.black} />}
              selected={isPesceratianSelected}
              onPress={() => handleChangeOption(EatingStyleEnum.Pesceratian)}
            />
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" disabled={isDisabledButton} onPress={async () => await handleClickContinue()} />
        </View>
      </View>
    </Container>
  )
}
