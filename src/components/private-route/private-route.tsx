import { Redirect } from "expo-router";
import { Loading } from "../loading/loading";
import { usePrivateRoute } from "./hook";
import { PrivateRouteProps } from "./props";

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isLoading, isAuthorized } = usePrivateRoute();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthorized) {
    return <Redirect href={'/auth/login'} withAnchor={false} />;
  }

  return (
    <>
      {children}
    </>
  )
}
