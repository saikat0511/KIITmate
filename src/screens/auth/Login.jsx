import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Snackbar } from 'react-native-paper';
import useColors from '../../hooks/useColors';
import useLogin from '../../hooks/useLogin';
import LoginPasswordField from '../../components/LoginPasswordField';
import LoginUserIDField from '../../components/LoginUserIDField';
import LoginButton from '../../components/LoginButton';
import KIITlogo from '../../assets/KIIT_logo.svg';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const areAllFieldsFilled = (username !== '') && (password !== '');
  const {
    login, error, setError, isLoading,
  } = useLogin();

  const { theme, primaryRippleColor, secondaryrippleColor } = useColors();

  const onDismissSnackBar = () => setError(null);

  const onPressHandler = async () => {
    if (!areAllFieldsFilled) {
      setError('Enter UserID and Password');
      return;
    }
    await login(username, password);
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', backgroundColor: theme.colors.background }}
    >
      <View style={{
        alignItems: 'center', paddingVertical: '5%',
      }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <KIITlogo width={72} height={72} />
          <View style={{ justifyContent: 'center' }}>
            <Text
              variant="displayMedium"
              style={{ color: '#17d059', fontWeight: 'bold' }}
            >
              KIITmate
            </Text>
          </View>
        </View>
        <Text
          variant="titleLarge"
          style={{
            color: theme.colors.secondary, textAlign: 'center', fontWeight: 'bold', marginBottom: 30,
          }}
        >
          Login to continue
        </Text>
        <View style={{ width: '85%', maxWidth: 500 }}>
          <LoginUserIDField
            disabled={isLoading}
            onChangeText={(newText) => setUsername(Number(newText))}
            style={{ marginBottom: 15 }}
          />
          <LoginPasswordField
            disabled={isLoading}
            onChangeText={(newText) => setPassword(newText)}
            rippleColor={secondaryrippleColor}
            style={{ marginBottom: 25 }}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <LoginButton
              loading={isLoading}
              disabled={isLoading}
              rippleColor={primaryRippleColor}
              onPress={onPressHandler}
            />
          </View>
        </View>
      </View>
      <Snackbar
        visible={!!error}
        onDismiss={onDismissSnackBar}
        duration={2750}
      >
        {error}
      </Snackbar>
    </ScrollView>
  );
}
