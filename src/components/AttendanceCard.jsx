import React from 'react';
import { View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import useColors from '../hooks/useColors';

export default function AttendanceCard(props) {
  const {
    subject, faculty, dayCount, presentCount, presentPercent,
  } = props;
  const { theme, progressBackgroundColor } = useColors();
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
        <AnimatedCircularProgress
          size={100}
          width={15}
          backgroundWidth={8}
          fill={parseFloat(presentPercent)}
          tintColor={theme.colors.primary}
          lineCap="round"
          rotation={0}
          backgroundColor={progressBackgroundColor}
        >
          {
            () => (
              <Text variant="titleLarge">
                {parseInt(presentPercent, 10) === 100 && 100}
                {parseInt(presentPercent, 10) !== 100 && parseFloat(presentPercent).toFixed(1)}
                %
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </Surface>
  );
}
