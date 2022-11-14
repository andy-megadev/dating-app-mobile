import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

// global scope prevents from calling this method too late
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isAppReady, setIsAppReady] = useState(false);

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
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }

  return <SafeAreaProvider onLayout={onLayoutRootView}></SafeAreaProvider>;
};

export default App;
