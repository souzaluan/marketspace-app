import { Providers } from '@/contexts';
import { SplashScreen } from '@/screens/splash';
import { preventAutoHideAsync } from 'expo-splash-screen';

preventAutoHideAsync();

export default function App() {
  return (
    <Providers>
      <SplashScreen />
    </Providers>
  );
}
