import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginPage from "../screens/login";
import RegisterPage from "../screens/register";
import ForgetPasswordPage from "../screens/forgetpassword";
import DrawerNavigation from "../navigation/AppNavigation";

const StackNavigation = createStackNavigator(
  {
    Login: { screen: LoginPage },
    ForgotPassword: { screen: ForgetPasswordPage },
    Register: { screen: RegisterPage },
    drawerNavigation: { screen: DrawerNavigation }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    },
    initialRouteName: "drawerNavigation"
  }
);

export default createAppContainer(StackNavigation);
