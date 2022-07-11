import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import CUSTOMER_ROUTES from './customers';
import AUTH_ROUTES from './auth';

import { RootStackParamList } from '../types/types';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const defaultOptions: NativeStackNavigationOptions = {
  animation: 'fade_from_bottom',
  headerShadowVisible: false,
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#22223b',
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const Routes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated
          ? [...CUSTOMER_ROUTES].map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{ ...defaultOptions, ...route.options }}
                component={route.component}
              />
            ))
          : [...AUTH_ROUTES].map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                options={{ ...defaultOptions, ...route.options }}
                component={route.component}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
