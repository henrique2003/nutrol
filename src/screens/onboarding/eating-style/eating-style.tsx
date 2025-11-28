import { DefaultButton } from "@/src/components/core/buttons/default-button/default-button"
import { Container } from "@/src/components/core/container/container/container"
import { Text, View } from "react-native"
import { ProgressBar } from "../components/progress-bar/progress-bar"

export const EatingStyle: React.FC = () => {
  return (
    <Container>
      <View className="justify-between items-center flex-1 w-full">
        <View className="w-full flex-row mt-5">
          <ProgressBar value={12.5} />
        </View>
        <View className="flex-1 w-full">
          <View className="flex-1 justify-center items-center">
            <Text className="text-black text-lg text-center font-semibold leading-5">Você segue algum estilo alimentar específico?</Text>
            <Text className="text-grey mt-3 text-md text-center font-medium leading-5">Escolha sua preferência.</Text>
          </View>
          <View className="w-full gap-3">
            
          </View>
        </View>
        <View className="w-full">
          <DefaultButton className="w-full" disabled />
        </View>
      </View>
    </Container>
  )
}
