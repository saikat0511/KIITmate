import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const useColors = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;
  const primaryRippleColor = isDarkMode ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)';
  const secondaryrippleColor = isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)';
  const progressBackgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  const topGradientColors = isDarkMode ? [
    'rgba(49, 44, 56, 1)',
    'rgba(49, 44, 56, 0.9)',
    'rgba(49, 44, 56, 0.7)',
    'rgba(49, 44, 56, 0.5)',
  ] : [
    'rgba(238, 232, 244, 1)',
    'rgba(238, 232, 244, 0.9)',
    'rgba(238, 232, 244, 0.7)',
    'rgba(238, 232, 244, 0.5)',
  ];
  const bottomGradientColors = isDarkMode ? [
    'rgba(49, 44, 56, 0.5)',
    'rgba(49, 44, 56, 0.7)',
    'rgba(49, 44, 56, 0.9)',
    'rgba(49, 44, 56, 1)',
  ] : [
    'rgba(238, 232, 244, 0.5)',
    'rgba(238, 232, 244, 0.7)',
    'rgba(238, 232, 244, 0.9)',
    'rgba(238, 232, 244, 1)',
  ];
  theme.colors.backdrop = isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.6)';
  return {
    theme,
    isDarkMode,
    primaryRippleColor,
    secondaryrippleColor,
    progressBackgroundColor,
    topGradientColors,
    bottomGradientColors,
  };
};

export default useColors;
