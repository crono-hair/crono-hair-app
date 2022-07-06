import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CUSTOMER_ROUTES from './customers';
import AUTH_ROUTES from './auth';

export type RootStackParamList = {
  Login: undefined;
  CreateCustomer: undefined;
  ListCustomers: {
    name: string;
    birthdate: string;
    sex: string;
    phone: string;
  };
};

export interface IRoute {
  name: keyof RootStackParamList;
  options: NativeStackNavigationOptions;
  component: React.FC<any>;
}

export const defaultOptions: NativeStackNavigationOptions = {
  headerShown: true,
  headerShadowVisible: false,
};

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Navigator>
        {isAuthenticated
          ? [...CUSTOMER_ROUTES].map(route => (
              <Screen
                name={route.name}
                options={route.options}
                component={route.component}
              />
            ))
          : [...AUTH_ROUTES].map(route => (
              <Screen
                name={route.name}
                options={route.options}
                component={route.component}
              />
            ))}
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
