import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DrawerNavigation from './AppNavigation';
import StackNavigation from './Appnavigation_partial';

export const SwitchNavigation = (switchNavroute = false ) =>{
  return createAppContainer(createSwitchNavigator(
  {
    loggedIn: DrawerNavigation,
    loggedOut: StackNavigation
  },
  {
    initialRouteName: switchNavroute ? 'loggedIn' : 'loggedOut'
  }
))
}