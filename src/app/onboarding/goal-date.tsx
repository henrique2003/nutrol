import { PrivateRoute } from "@/src/components/private-route/private-route";
import { GoalDate } from "@/src/screens/onboarding/goal-date/goal-date";

const GoalDateScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <GoalDate />
    </PrivateRoute>
  )
}

export default GoalDateScreen;