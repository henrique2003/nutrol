import { useMemo } from "react";
import { mask } from "react-native-mask-text";
import { InputMaskProps } from "./props";

export function useInputMask({ value, onChangeText, mask: maskValue }: InputMaskProps) {
  const handleChange = (text: string) => {
    const numeric = mask(text ?? '', maskValue);

    onChangeText?.(numeric);
  };

  const valueFormated = useMemo(() => mask(value ?? '', maskValue), [maskValue, value]);

  return {
    value: valueFormated,
    handleChange
  }
}