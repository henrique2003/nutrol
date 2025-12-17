import { PrivateRoute } from "@/src/components/private-route/private-route";
import { SuccessLoading } from "@/src/screens/onboarding/success-loading/success-loading";

const SuccessLoadingScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <SuccessLoading />
    </PrivateRoute>
  )
}

export default SuccessLoadingScreen;