import { PrivateRoute } from '@/src/components/private-route/private-route';
import { View } from 'react-native';

const DashboardScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <View></View>
    </PrivateRoute>
  )
}

export default DashboardScreen;