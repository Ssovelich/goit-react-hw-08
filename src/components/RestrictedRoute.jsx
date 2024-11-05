import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";

// Якщо маршрут обмежений і користувач увійшов у систему,
// відобразити <Navigate> для перенаправлення.
// Інакше візуалізуйте компонент

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
