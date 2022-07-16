import React, { useState } from 'react';

import { Button, Input, SafeArea, Spacer, Text } from '../../components';
import { maskDate } from '../../utils/utils';

import { INavigation } from '../../types/types';

const CreateCustomerScreen: React.FC<INavigation> = ({ navigation }) => {
  const [customerName, setCustomerName] = useState<string>('');
  const [customerBirthdate, setCustomerBirthdate] = useState<string>('');
  const [customerSex, setCustomerSex] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');

  return (
    <SafeArea>
      <Spacer p={16}>
        <Input
          label="Nome completo"
          onChangeText={setCustomerName}
          value={customerName}
          placeholder="Carlos Nascimento"
          maxLength={65}
        />
        <Spacer mt={16} />
        <Input
          label="Data de nascimento"
          onChangeText={text => setCustomerBirthdate(maskDate(text))}
          value={customerBirthdate}
          placeholder="01/01/1999"
          maxLength={10}
        />
        <Spacer mt={16} />
        <Input
          label="Sexo"
          onChangeText={setCustomerSex}
          value={customerSex}
          placeholder="Masculino"
        />
        <Spacer mt={16} />
        <Input
          label="Número para contato"
          onChangeText={setCustomerPhone}
          value={customerPhone}
          placeholder="(11) 94886-7760"
        />
        <Spacer mt={16} />
        <Button
          text="Cadastrar"
          onPress={() =>
            navigation.navigate('ListCustomersScreen', {
              name: customerName,
              birthdate: customerBirthdate,
              sex: customerSex,
              phone: customerPhone,
            })
          }
        />
      </Spacer>
    </SafeArea>
  );
};

export default CreateCustomerScreen;
