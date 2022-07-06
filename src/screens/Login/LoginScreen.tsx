import React, { useState } from 'react';

import { Button, Input, SafeArea, Spacer } from '../../components';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <SafeArea>
      <Spacer mt={200} />
      <Spacer p={16}>
        <Input
          label="Email"
          onChangeText={setUsername}
          value={username}
          placeholder="cronohair@exemplo.com"
        />
        <Spacer mt={8} />
        <Input
          label="Senha"
          onChangeText={setPassword}
          value={password}
          placeholder="********"
          secureTextEntry
        />
        <Spacer mt={16} />
        <Button text="Acessar aplicativo" />
      </Spacer>
    </SafeArea>
  );
};

export default LoginScreen;
