import { PrivateRoute } from "@/src/components/private-route/private-route";
import { ProfileData } from "@/src/screens/onboarding/profile-data/profile-data";

const ProfileDataScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <ProfileData />
    </PrivateRoute>
  )
}

export default ProfileDataScreen;