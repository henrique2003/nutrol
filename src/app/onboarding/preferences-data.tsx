import { PrivateRoute } from "@/src/components/private-route/private-route";
import { PreferencesData } from "@/src/screens/onboarding/preferences-data/preferences-data";

const PreferencesDataScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <PreferencesData />
    </PrivateRoute>
  )
}

export default PreferencesDataScreen;