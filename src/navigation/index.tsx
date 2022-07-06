import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/Login/LoginScreen';
import CreateCustomerScreen from '../screens/Customers/CreateCustomerScreen';
import ListCustomersScreen from '../screens/Customers/ListCustomersScreen';

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

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen
              name="CreateCustomer"
              options={defaultOptions}
              component={CreateCustomerScreen}
            />
            <Stack.Screen
              name="ListCustomers"
              options={defaultOptions}
              component={ListCustomersScreen}
            />
          </>
        ) : (
          <Stack.Screen
            name="Login"
            options={defaultOptions}
            component={LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
