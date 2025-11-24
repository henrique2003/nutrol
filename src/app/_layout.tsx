import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import "@/src/styles/global.css";
import 'react-native-get-random-values';
import Toast from 'react-native-toast-message';
import { UserProvider } from '../context/user/user';

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_300Light,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <UserProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
        <Toast
          topOffset={100}
        />
      </UserProvider>
    </ThemeProvider>
  );
}
