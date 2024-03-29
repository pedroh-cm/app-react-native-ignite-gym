import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

import { THEME } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider isSSR={false} theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
       {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}

