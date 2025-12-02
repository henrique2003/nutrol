import { Container } from "@/src/components/core/container/container/container"
import { Text, View } from "react-native"
import { ProgressBar } from "../components/progress-bar/progress-bar"
import { useProfileDataHook } from "./hook"

export const SuccessLoading: React.FC = () => {
  useProfileDataHook()

  return (
    <Container>
      <View className="justify-between items-center mt-5 flex-1 w-full">
        <View className="w-full flex-row mt-4 max-w-[280px]">
          <ProgressBar value={100} />
        </View>
        <View className="flex-1 w-full justify-center items-center mb-12">
          <Text className="text-black text-3xl text-center font-semibold">Perfeito! </Text>
          <Text className="text-black text-xl text-center font-medium mt-8">
            O seu perfil foi salvo e o <Text className="text-green">Nutrol</Text> está preparando a sua primeira dieta.
          </Text>
          <Text className="text-black text-xl text-center font-medium mt-16">
            Isso leva só alguns segundos…
          </Text>
        </View>
      </View>
    </Container>
  );
}
