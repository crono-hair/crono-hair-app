import React, { useState } from 'react';

import { Button, Input, SafeArea, Spacer, Text } from '../../components';

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
        />
        <Spacer mt={16} />
        <Input
          label="Data de nascimento"
          onChangeText={setCustomerBirthdate}
          value={customerBirthdate}
          placeholder="01/01/1999"
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
            navigation.navigate('ListCustomers', {
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
