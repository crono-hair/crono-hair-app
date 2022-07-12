import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import CUSTOMER_ROUTES from './customers';
import AUTH_ROUTES from './auth';

import { RootStackParamList } from '../types/types';

const defaultOptions: DrawerNavigationOptions = {
  headerShadowVisible: false,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#22223b',
  },
  drawerStyle: { backgroundColor: '#22223b' },
  drawerLabelStyle: { color: '#fff' },
  drawerActiveBackgroundColor: '#ff9f1c',
};

const { Screen: DrawerScreen, Navigator: DrawerNavigator } =
  createDrawerNavigator<RootStackParamList>();

export const Routes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <DrawerNavigator useLegacyImplementation>
        {isAuthenticated
          ? [...CUSTOMER_ROUTES].map(route => (
              <DrawerScreen
                key={route.name}
                name={route.name}
                options={{ ...route.options, ...defaultOptions }}
                component={route.component}
              />
            ))
          : [...AUTH_ROUTES].map(route => (
              <DrawerScreen
                key={route.name}
                name={route.name}
                options={{ ...route.options, ...defaultOptions }}
                component={route.component}
              />
            ))}
      </DrawerNavigator>
    </NavigationContainer>
  );
};

export default Routes;
