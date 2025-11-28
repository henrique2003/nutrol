import { Text, TouchableOpacity } from 'react-native';
import { DefaultButtonProps } from './props';

export const DefaultButton: React.FC<DefaultButtonProps> = ({ className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`rounded-xl flex-row gap-2 justify-center items-center bg-black h-[43px] w-full ${className} disabled:bg-dark`}
      {...rest}
    >
      <Text className='text-white font-bold text-xl'>Continuar</Text>
    </TouchableOpacity>
  );
}
