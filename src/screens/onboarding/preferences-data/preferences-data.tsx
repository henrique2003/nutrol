import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { InputText } from "@/src/components/core/inputs/input-text/input-text"
import { Label } from "@/src/components/core/label/label"
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { usePreferencesDataHook } from "./hook"

export const PreferencesData: React.FC = () => {
  const {
    handleClickContinue,
    handleChangePreferences,
    handleChangeRestrictions,
    preferences,
    restrictions,
  } = usePreferencesDataHook()

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
            <Text className="text-black text-2xl  text-center font-bold leading-7">Alguma restrição ou preferência alimentar?</Text>
            <Text className="text-grey mt-4 text-md text-center font-medium leading-5">Restrições ou preferências (opcional).</Text>
          </View>
          <View className="w-full gap-8 flex-1 justify-start">
            <View className="gap-1">
              <Label text="Prefereincias" />
              <InputText
                placeholder="Frango, Peixe"
                onChangeText={handleChangePreferences}
                value={preferences}
              />
            </View>
            <View className="gap-1">
              <Label text="Restrições" />
              <InputText
                placeholder="Ovo, Leite"
                onChangeText={handleChangeRestrictions}
                value={restrictions}
              />
            </View>
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" onPress={handleClickContinue} />
        </View>
      </View>
    </Container>
  );
}
