import { useState } from 'react';
import { login } from '../../../services/auth';
import { navigation } from '../../../routes';

export const useViewModel = () => {
  const [form, setForm] = useState<{ username: string; password: string }>({
    username: '',
    password: '',
  });
  const { navigate } = navigation();
  const onChangeText = (object: any) => {
    setForm({ ...form, ...object });
  };

  const signIn = async () => {
    const response = await login(form);
    if (response) {
      console.log('Login efetuado com sucesso');
      navigate('Home');
    }
  };





  return { signIn, onChangeText, form };
};