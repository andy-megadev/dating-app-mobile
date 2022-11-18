import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import AppNavigation from './src/navigation';

// global scope prevents from calling this method too late
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isFontsLoaded] = useFonts({
    'Rubik-Regular': require('./src/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Medium': require('./src/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-SemiBold': require('./src/assets/fonts/Rubik-SemiBold.ttf')
  });

  const prepareApp = useCallback(async () => {
    try {
      // fetch data and prepare app here
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch {
    } finally {
      setIsAppReady(true);
    }
  }, []);

  useEffect(() => {
    prepareApp();
  }, [prepareApp]);

  const onLayoutRootView = useCallback(async () => {
    // hide splash screen when app is ready and screen is rendered
    if (isAppReady && isFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady || !isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

export default App;
