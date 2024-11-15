import React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginStack from './LogInStack';
import {stackNavigationName} from 'constants/navigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <BasicLayout>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={stackNavigationName.logInStack}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={stackNavigationName.logInStack}
            component={LoginStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BasicLayout>
  );
};

const BasicLayout = styled.SafeAreaView`
  flex: 1;
`;

export default RootNavigation;
