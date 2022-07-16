import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { SafeArea, Spacer, Text } from '../../components';

import { RootStackParamList } from '../../types/types';

const ListCustomersScreen: React.FC<
  DrawerScreenProps<RootStackParamList, 'ListCustomersScreen'>
> = ({ route }) => {
  const { name, sex, birthdate, phone } = route.params || {};

  return (
    <SafeArea>
      <Spacer p={16}>
        <Text size={20}>Nome: {name}</Text>
        <Text size={20}>Sexo: {sex}</Text>
        <Text size={20}>Data de nascimento: {birthdate}</Text>
        <Text size={20}>Número para contato: {phone}</Text>
      </Spacer>
    </SafeArea>
  );
};

export default ListCustomersScreen;
