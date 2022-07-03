import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeArea, Spacer } from './components';

import Button from './components/UI/Button';
import Input from './components/UI/Input';

const App = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <NavigationContainer>
      <SafeArea>
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
    </NavigationContainer>
  );
};

export default App;
