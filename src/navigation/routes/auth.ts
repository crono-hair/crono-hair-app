import LoginScreen from '../../screens/Login/LoginScreen';

import { IRoute } from '../../types/types';

const AUTH_ROUTES: IRoute[] = [
  {
    name: 'Login',
    options: { headerShown: false },
    component: LoginScreen,
  },
];

export default AUTH_ROUTES;
