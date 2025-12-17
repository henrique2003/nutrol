import { PrivateRoute } from "@/src/components/private-route/private-route";
import { ExercisesFrequency } from "@/src/screens/onboarding/exercises-frequency/exercises-frequency";

const ExercisesFrequencyScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <ExercisesFrequency />
    </PrivateRoute>
  )
}

export default ExercisesFrequencyScreen;