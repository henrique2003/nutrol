import { PrivateRoute } from "@/src/components/private-route/private-route";
import { NumberOfMeals } from "@/src/screens/onboarding/number-of-meals/number-of-meals";

const NumberOfMealsScreen: React.FC = () => {
  return (
    <PrivateRoute>
      <NumberOfMeals />
    </PrivateRoute>
  )
}

export default NumberOfMealsScreen;