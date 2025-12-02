import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { InputMask } from "@/src/components/core/inputs/input-mask/input-mask"
import { InputText } from "@/src/components/core/inputs/input-text/input-text"
import { Label } from "@/src/components/core/label/label"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useProfileDataHook } from "./hook"

export const ProfileData: React.FC = () => {
  const {
    handleClickContinue,
    isDisabledButton,
    handleChangeAge,
    handleChangeHeight,
    handleChangeWeight,
    age,
    height,
    weight
  } = useProfileDataHook()

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
            <ProgressBar value={75} />
          </View>
        </View>
        <View className="flex-1 w-full  mb-12">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-2xl  text-center font-bold leading-7">Vamos entender melhor o seu perfil!</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">Vamos ajustar tudo ao seu perfil.</Text>
          </View>
          <View className="w-full gap-4">
            <View className="gap-1">
              <Label text="Idade:" />
              <InputText
                keyboardType="numeric"
                placeholder="Ex: 18"
                onChangeText={handleChangeAge}
                value={age}
              />
            </View>
            <View className="gap-1">
              <Label text="Altura:" />
              <InputMask
                placeholder="Ex: 1,80m"
                mask="9,99"
                onChangeText={handleChangeHeight}
                value={height}
                sufix="m"
              />
            </View>
            <View className="gap-1">
              <Label text="Peso:" />
              <InputMask
                placeholder="Ex: 72kg"
                mask="99"
                onChangeText={handleChangeWeight}
                value={weight}
                sufix="kg"
              />
            </View>
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" disabled={isDisabledButton} onPress={handleClickContinue} />
        </View>
      </View>
    </Container>
  );
}
