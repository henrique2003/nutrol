import { COLORS } from '@/src/consts/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, TouchableOpacity } from 'react-native';
import { AppleButtonProps } from './props';

export const AppleButton: React.FC<AppleButtonProps> = ({ className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`rounded-lg flex-row gap-2 justify-center items-center bg-black h-[45px] w-full ${className}`}
      {...rest}
    >
      <AntDesign name="apple" size={22} color={COLORS.white} />
      <Text className='text-white font-bold text-lg'>Entrar com Apple</Text>
    </TouchableOpacity>
  );
}
