import {
  DrawerNavigationOptions,
  DrawerNavigationProp,
} from '@react-navigation/drawer';

import { TextInputProps, TouchableOpacityProps } from 'react-native';

export type RootStackParamList = {
  LoginScreen: undefined;
  CreateCustomerScreen: undefined;
  ListCustomersScreen: {
    name: string;
    birthdate: string;
    sex: string;
    phone: string;
  };
  CalendarScreen: undefined;
};

export interface INavigation {
  navigation: DrawerNavigationProp<RootStackParamList>;
}

export interface IRoute {
  name: keyof RootStackParamList;
  options?: DrawerNavigationOptions;
  component: React.FC<any>;
}

export interface ISafeArea {
  statusBarBgColor?: string;
  barStyle?: 'light' | 'dark';
  bgColor?: string;
  children: React.ReactChild | React.ReactChild[];
}

export interface IInput extends TextInputProps {
  placeholder: string;
  label?: string;
}

export interface ISpacer {
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  py?: number;
  px?: number;
  m?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  my?: number;
  mx?: number;
  children?: React.ReactChild | React.ReactChild[];
}

export interface IText {
  size?: number;
  color?: string;
  align?: string;
  weight?: 'normal' | 'bold';
  lineHeight?: number;
  spacing?: number;
  style?: object;
  children: React.ReactChild | React.ReactChild[];
}

export interface IButton extends TouchableOpacityProps {
  text: string;
}
