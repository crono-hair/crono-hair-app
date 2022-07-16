import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

import CUSTOMER_ROUTES from './routes/customers';
import SCHEDULE_ROUTES from './routes/schedule';
import AUTH_ROUTES from './routes/auth';

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
          ? [...CUSTOMER_ROUTES, ...SCHEDULE_ROUTES].map(route => (
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
