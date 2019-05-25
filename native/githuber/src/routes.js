import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Welcome from "./pages/welcome/index";
import Repositories from "./pages/repositories/index";
import Organizations from "./pages/organizations/index";
import { colors } from "./styles";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organizations
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        )
      },
      {
        initialRouteName: userLogged ? "User" : "Welcome"
      }
    )
  );
export default Routes;
