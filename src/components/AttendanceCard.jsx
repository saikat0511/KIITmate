import React from 'react';
import { View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import useColors from '../hooks/useColors';

export default function AttendanceCard(props) {
  const {
    subject, faculty, dayCount, presentCount, presentPercent,
  } = props;
  const { theme } = useColors();
  return (
    <Surface elevation={2} style={{ marginVertical: 7, padding: 15, borderRadius: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Text numberOfLines={1} variant="titleLarge">{subject}</Text>
            <Text numberOfLines={1} variant="titleMedium" style={{ fontWeight: 'bold' }}>{faculty}</Text>
          </View>
          <Text variant="titleLarge">
            Attendance:
            {' '}
            {parseInt(presentCount, 10)}
            /
            {parseInt(dayCount, 10)}
          </Text>
        </View>
        <View>
          <AnimatedProgressWheel
            size={100}
            width={15}
            progress={parseFloat(presentPercent, 10)}
            color={theme.colors.primary}
            backgroundColor={theme.colors.outlineVariant}
            rotation="-90deg"
            rounded
          />
          <View style={{
            position: 'absolute', height: 100, width: 100, justifyContent: 'center', alignItems: 'center',
          }}
          >
            <Text variant="titleMedium">
              {parseInt(presentPercent, 10) === 100 && 100}
              {parseInt(presentPercent, 10) !== 100 && parseFloat(presentPercent).toFixed(1)}
              %
            </Text>
          </View>
        </View>
      </View>
    </Surface>
  );
}
