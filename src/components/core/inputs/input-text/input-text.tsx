import { TextInput } from "react-native"
import { InputTextProps } from "./props"

export  const InputText: React.FC<InputTextProps> = ({ className, ...rest }) => {
  return (
    <TextInput
      {...rest}
      className={`bg-lightGrey rounded-md px-4 text-lg h-[55px] ${className} leading-5 color-grey`}
    />
  )
}
