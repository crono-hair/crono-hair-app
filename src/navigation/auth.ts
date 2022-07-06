import { IRoute } from '.';
import LoginScreen from '../screens/Login/LoginScreen';

const AUTH_ROUTES: IRoute[] = [
  {
    name: 'Login',
    options: { headerShown: false },
    component: LoginScreen,
  },
];

export default AUTH_ROUTES;
