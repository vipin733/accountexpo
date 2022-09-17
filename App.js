import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NativeBaseProvider } from "native-base";
import { _isLoggedIn } from './utils/helper';
import HomeScreen from './pages/home';
import LoginScreen from './pages/login';
import ProfileScreen from './pages/profile';
import LogOutScreen from './pages/logout';
import CustomSidebarMenu from './components/CustomSidebarMenu'
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

  const reducer = useSelector(state => state)
  let isLoggedIn = _isLoggedIn(reducer)

  return (
    <NavigationContainer>
      <NativeBaseProvider>
      {isLoggedIn ?  <Drawer.Navigator
        screenOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Logout" component={LogOutScreen} />
      </Drawer.Navigator>: 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator> }
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
