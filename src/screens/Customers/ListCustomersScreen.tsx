import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation';

import { SafeArea, Spacer, Text } from '../../components';

const ListCustomersScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ListCustomers'>
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
