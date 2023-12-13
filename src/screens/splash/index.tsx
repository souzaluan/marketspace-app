import { Routes } from '@/routes';
import { THEME } from '@/theme';
import {
  Karla_300Light,
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from '@expo-google-fonts/karla';
import { hideAsync } from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function SplashScreen() {
  const [fontsLoaded] = useFonts({
    Karla_300Light,
    Karla_400Regular,
    Karla_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  hideAsync();

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={THEME.COLORS.GRAY_6}
        translucent={false}
        barStyle="dark-content"
      />
      <Routes />
    </SafeAreaProvider>
  );
}
