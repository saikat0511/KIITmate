import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const useColors = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const theme = isDarkMode ? MD3DarkTheme : MD3LightTheme;
  const primaryRippleColor = isDarkMode ? '#00000080' : '#ffffff80';
  const secondaryrippleColor = isDarkMode ? '#ffffff66' : '#00000066';
  return { theme, primaryRippleColor, secondaryrippleColor };
};

export default useColors;
