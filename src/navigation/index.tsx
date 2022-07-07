import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import CUSTOMER_ROUTES from './customers';
import AUTH_ROUTES from './auth';

import { RootStackParamList } from '../types/types';

export const defaultOptions: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
  headerShadowVisible: false,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#22223b',
  },
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
