import { googleLogo } from '@/src/assets';
import { Image, Text, TouchableOpacity } from 'react-native';
import { AppleButtonProps } from './props';

export const GoogleButton: React.FC<AppleButtonProps> = ({ className, ...rest }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`rounded-lg flex-row gap-2 justify-center items-center border border-black h-[45px] w-full ${className}`}
      {...rest}
    >
      <Image source={googleLogo} className='w-[25px] h-[22px]' />
      <Text className='text-black font-semibold text-lg'>Entrar com Google</Text>
    </TouchableOpacity>
  );
}
