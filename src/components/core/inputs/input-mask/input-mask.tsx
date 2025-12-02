import { useRef } from "react"
import { Pressable, Text, TextInput } from "react-native"
import { useInputMask } from "./hook"
import { InputMaskProps } from "./props"

export  const InputMask: React.FC<InputMaskProps> = (props) => {
  const { className, sufix, ...rest } = props

  const {
    handleChange,
    value
  } = useInputMask(props)

  const inpuRef = useRef<TextInput | null>(null)

  return (
    <Pressable
      className={`bg-lightGrey rounded-md px-4 text-lg h-[55px] ${className} leading-5 color-grey items-center flex-row`}
      onPress={() => inpuRef.current?.focus()}
    >
      <TextInput
        {...rest}
        onChangeText={handleChange}
        value={value}
        className="color-grey"
        ref={inpuRef}
      />
      {(sufix && !!value) && <Text className="color-grey text-lg">{sufix}</Text>}
    </Pressable>
  )
}
