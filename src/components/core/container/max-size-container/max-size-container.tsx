import { SIZES } from "@/src/consts/sizes"
import { View } from "react-native"
import { MaxSizeContainerProps } from "./props"

export const MaxSizeContainer: React.FC<MaxSizeContainerProps> = ({ outsideClassName, children, className, ...rest }) => {
  return (
    <View className={`flex-1 items-center justify-center py-5 bg-transparent ${outsideClassName}`}>
      <View
        className={`w-full flex-1 justify-center items-center ${className}`} {...rest}
        style={{
          maxWidth: SIZES.MAX_WIDTH_CONTAINER,
          paddingHorizontal: SIZES.HORIZONTAL_PADDING_CONTAINER
        }}
      >
        {children}
      </View>
    </View>
  )
}
