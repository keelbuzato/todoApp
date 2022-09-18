import { StatusBar, Text } from 'react-native';
import { Home } from './src/screen/Home';
import { useFonts } from 'expo-font';
import React from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
  });
  if (!fontsLoaded)
    return (
      <>
        <Text>Carregando</Text>
      </>
    );

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
