import { PrivateRoute } from '@/src/components/private-route/private-route';
import { EatingStyle } from '@/src/screens/onboarding/eating-style/eating-style';

const EatingStyleScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <EatingStyle />
    </PrivateRoute>
  )
}

export default EatingStyleScreen;