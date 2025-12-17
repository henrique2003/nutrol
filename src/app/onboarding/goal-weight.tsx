import { PrivateRoute } from "@/src/components/private-route/private-route";
import { GoalWeight } from "@/src/screens/onboarding/goal-weight/goal-weight";

const GoalWeightScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <GoalWeight />
    </PrivateRoute>
  )
}

export default GoalWeightScreen;