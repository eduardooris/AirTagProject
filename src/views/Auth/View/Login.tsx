import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Container from '../../../components/Container/Container';
import { Text } from '../../../components/Text/Text';
import { useViewModel } from '../ViewModel/Login';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

export default function Login() {
  const { signIn, form, onChangeText } = useViewModel();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container} contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}>
        <View style={{ marginTop: 20 }} >
          <Text typography="large" style={{ marginBottom: 20 }}>Login</Text>
          <Input
            placeholder="Usuário"
            onChangeText={e => onChangeText({ username: e })}
            value={form.username}
          />
          <Input
            placeholder="Senha"
            icon="lock"
            onChangeText={e => onChangeText({ password: e })}
            secureTextEntry={true}
            value={form.password}
          />
        </View>
        <View style={style.containerButton}>
          <Button size="medium" onPress={signIn}>
            Fazer login
          </Button>
        </View>
      </ScrollView>
    </Container>
  );
}

const style = StyleSheet.create({
  container: { paddingHorizontal: 30, flex: 1 },
  containerButton: {
    alignItems: 'center',
    marginBottom: 80
  },
});
