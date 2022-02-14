import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import * as Screens from 'screens';

import Routes from './Routes';
import {navigationRef} from './NavigationService';
import {BackButton} from 'components';
import {useAuth} from 'hooks';

const Stack = createStackNavigator();

export const Navigator = () => {
  const {isAuthenticated} = useAuth();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Routes.Login}>
        <Stack.Screen
          name={Routes.Login}
          component={Screens.Login}
          options={{
            headerShown: false,
          }}
        />
        {isAuthenticated && (
          <>
            <Stack.Screen
              name={Routes.Home}
              component={Screens.Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={Routes.Transfer}
              component={Screens.Transfer}
              options={{
                headerLeft: () => <BackButton />,
                headerShadowVisible: true,
                headerTitleAlign: "center"
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
