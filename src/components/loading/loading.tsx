import { logo } from "@/src/assets"
import { ActivityIndicator, Image, View } from "react-native"
import { Container } from "../core"

export const Loading: React.FC = () => {
  return (
    <Container className="bg-white" outsideClassName="bg-white">
      <View className="flex-1 items-center justify-center">
        <Image source={logo} width={312} height={77} className="w-[312px] h-[73px]" />
        <ActivityIndicator size="large" color="#1F2024" className="mt-12" />
      </View>
    </Container>
  )
}
