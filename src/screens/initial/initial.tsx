import { logo } from "@/src/assets"
import { AppleButton } from "@/src/components/core/buttons/apple-button/apple-button"
import { GoogleButton } from "@/src/components/core/buttons/google-button/google-button"
import { Container } from "@/src/components/core/container/container/container"
import { router } from "expo-router"
import { Image, Platform, Text, View } from "react-native"

export const Initial: React.FC = () => {
  return (
    <Container>
      <View className="flex-1 w-full">
        <View className="flex-1 justify-center items-center">
          <Text className="text-5xl text-black font-bold">Bem-vindo ao</Text>
          <Image source={logo} className="w-[250px] h-[56px] mt-[-5px]" />
          <Text className="text-base font-medium text-center w-full text-grey mt-7">Seu assistente inteligente</Text>
          <Text className="text-base font-medium text-center w-full text-grey mt-[-2px]">para fazer e acompanhar sua dieta</Text>
        </View>
        <View className="w-full gap-3">
          {Platform.OS === 'ios' && (
            <AppleButton onPress={() => router.push('/onboarding/eating-style')} />
          )}
          <GoogleButton />
        </View>
      </View>
    </Container>
  )
}
