import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CUSTOMER_ROUTES from './customers';
import AUTH_ROUTES from './auth';

import { RootStackParamList } from '../types/types';

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
