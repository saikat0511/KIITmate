import React from 'react';
import { View } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import useColors from '../hooks/useColorScheme';

export default function AttendanceCard(props) {
  const {
    subject, faculty, dayCount, presentCount, presentPercent,
  } = props;
  const { theme, progressBackgroundColor } = useColors();
  return (
    <Surface elevation={2} style={{ marginBottom: 15, padding: 15, borderRadius: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Text numberOfLines={1} variant="headlineMedium">{subject}</Text>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>{faculty}</Text>
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
          size={120}
          width={20}
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
                {parseFloat(presentPercent).toFixed(1)}
                %
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </Surface>
  );
}
