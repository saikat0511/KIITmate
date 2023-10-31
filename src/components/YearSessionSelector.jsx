import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Portal, Text, TouchableRipple, Dialog, Button,
} from 'react-native-paper';
import useAttendanceContext from '../hooks/useAttendanceContext';
import useColors from '../hooks/useColors';
import useAuthContext from '../hooks/useAuthContext';
import ScrollPicker from './ScrollPicker';

export default function YearSessionSelector() {
  const {
    yearSession, setYearSession,
  } = useAttendanceContext();
  const { user } = useAuthContext();
  const { secondaryrippleColor } = useColors();

  const [yearIndex, setYearIndex] = useState(0);
  const [sessionIndex, setSessionIndex] = useState(0);
  const currentyear = parseInt(new Date().toLocaleString('en-US', { year: 'numeric' }), 10);
  const admissionYear = parseInt(`20${user.id.toString().slice(0, 2)}`, 10);
  const yearItems = [];
  for (let i = admissionYear; i <= currentyear; i += 1) {
    const item = new Object();
    item.value = i;
    item.label = `${i.toString()}-${(i + 1).toString().slice(-2)}`;
    yearItems.push(item);
  }
  const yearInitialIndex = yearItems.findIndex((item) => item.value === yearSession.year);
  const sessionItems = [
    {
      value: 'Autumn',
      label: 'Autumn',
    },
    {
      value: 'Spring',
      label: 'Spring',
    },
  ];
  const sessionInitialIndex = sessionItems.findIndex((item) => item.value === yearSession.session);

  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const onPressHandler = () => {
    setYearSession({
      year: yearItems[yearIndex].value,
      session: sessionItems[sessionIndex].value,
    });
    hideDialog();
  };

  return (
    <View style={{ borderRadius: 15, overflow: 'hidden' }}>
      <TouchableRipple
        rippleColor={secondaryrippleColor}
        onPress={showDialog}
        style={{ padding: 5 }}
      >
        <Text variant="titleMedium" style={{ textAlign: 'right' }}>
          {yearSession.year}
          -
          {(yearSession.year + 1).toString().slice(-2)}
          {'\n'}
          {yearSession.session}
        </Text>
      </TouchableRipple>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          {/* <Dialog.Title>Alert</Dialog.Title> */}
          <Dialog.Content>
            {/* <Text variant="bodyMedium">This is simple dialog</Text> */}
            <View style={{ flexDirection: 'row' }}>
              <ScrollPicker
                items={yearItems}
                onScroll={({ index }) => setYearIndex(index)}
                initialSelectedIndex={yearInitialIndex}
                width="50%"
              />
              <ScrollPicker
                items={sessionItems}
                onScroll={({ index }) => setSessionIndex(index)}
                initialSelectedIndex={sessionInitialIndex}
                width="50%"
              />
            </View>
            {/* <Text>
                Selected item index
                {' '}
                {selectedItemIndex}
              </Text> */}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onPressHandler}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
