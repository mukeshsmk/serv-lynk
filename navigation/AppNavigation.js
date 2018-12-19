import React from 'react'
import { createDrawerNavigator, createAppContainer, DrawerItems } from "react-navigation";
import { Container, Content, Icon, Header, Body } from 'native-base';

import Home from '../screens/home';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header>
      <Body>
        
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const drawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Notifications: {
    screen: Home,
  },
},{
  initialRouteName: 'Home',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
})


export default createAppContainer(drawerNavigation)