import { Navigate, Outlet } from 'react-router-dom';
import jwtToken from '../services/jwtToken';

const PrivateRoute = () => {
  const token = jwtToken.getToken();

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
