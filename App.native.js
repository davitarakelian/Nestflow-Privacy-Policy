import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import AppStack from '@/navigation/AppStack';
import { AuthProvider } from './src/context/AuthContext';
import { FilterProvider } from '@/components/FilterContext';
import { STRIPE_PUBLISHABLE_KEY } from './src/services/stripeService';

import { LogBox } from 'react-native';

// Enable react-native-screens for better performance on native platforms
import { enableScreens } from 'react-native-screens';
enableScreens();

LogBox.ignoreLogs([]);
LogBox.ignoreAllLogs(false);

export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <AuthProvider>
        <FilterProvider>
          <AppStack />
        </FilterProvider>
      </AuthProvider>
    </StripeProvider>
  );
}

