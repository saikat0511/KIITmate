import React from 'react';
import {TextInput} from 'react-native-paper';

export default function LoginUserIDField(props) {
  const {disabled, onChangeText, style, value} = props;
  return (
    <TextInput
      disabled={disabled}
      onChangeText={onChangeText}
      mode="outlined"
      label="User ID"
      keyboardType="numeric"
      style={style}
      right={<TextInput.Icon icon="account" rippleColor="#00000000" />}
      value={value}
    />
  );
}
