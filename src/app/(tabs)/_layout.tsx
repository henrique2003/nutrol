import { COLORS } from '@/src/consts/colors';
import { SIZES } from '@/src/consts/sizes';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
import { ChartNoAxesColumnIncreasing, Salad, ShoppingCart, UserCog } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          display: 'flex',
          height: SIZES.TAB_BAR_HEIGHT + insets.bottom,
          paddingTop: 10,
          paddingBottom: insets.bottom
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? COLORS.darkGreen : COLORS.dark

          if (route.name === 'metrics') {
            return (
              <ChartNoAxesColumnIncreasing size={20} color={color} />
            )
          } else if (route.name === 'cart') {
            return (
              <ShoppingCart size={24} color={color} />
            )
          } else if (route.name === 'index') {
            return (
              <FontAwesome5 name="home" size={23} color={color} />
            )
          } else if (route.name === 'diets') {
            return (
              <Salad size={24} color={color} />
            )
          } else if (route.name === 'profile') {
            return (
              <UserCog size={24} color={color} />
            )
          }
        }
      })}
    >
      <Tabs.Screen name="metrics" options={{ headerShown: false }} />
      <Tabs.Screen name="cart" options={{ headerShown: false }} />
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="diets" options={{ headerShown: false }} />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  )
}
