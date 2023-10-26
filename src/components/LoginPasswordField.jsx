import {React, useState} from 'react';
import {TextInput} from 'react-native-paper';

export default function LoginPasswordField(props) {
  const [visible, updateVisibility] = useState(true);
  const {disabled, onChangeText, style, rippleColor, value} = props;

  const onPressHandler = () => {
    updateVisibility(!visible);
  };

  return (
    <TextInput
      disabled={disabled}
      onChangeText={onChangeText}
      mode="outlined"
      label="Password"
      secureTextEntry={visible}
      style={style}
      right={
        <TextInput.Icon
          icon={visible ? 'eye-off' : 'eye'}
          rippleColor={rippleColor}
          onPress={onPressHandler}
        />
      }
      value={value}
    />
  );
}
