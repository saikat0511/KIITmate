import { React } from 'react';
import { Button } from 'react-native-paper';

export default function LoginButton(props) {
  const {
    loading, disabled, rippleColor, onPress,
  } = props;

  return (
    <Button
      loading={loading}
      disabled={disabled}
      mode="contained"
      rippleColor={rippleColor}
      contentStyle={{ width: 125, height: 60 }}
      labelStyle={{ fontSize: 18, fontWeight: 'bold' }}
      onPress={onPress}
    >
      Login
    </Button>
  );
}
