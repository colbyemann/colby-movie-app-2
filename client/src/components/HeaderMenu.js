import React from 'react';
import About from "./About.js";

import { Menu } from 'antd';
import {
  IdcardOutlined,
  LogoutOutlined
} from '@ant-design/icons';


const HeaderMenu = function (props) {
 

 return (
  <Menu  mode="horizontal">
  <Menu.Item key="mail">
    <IdcardOutlined />
    <a href="https://colby-movie-app-2.herokuapp.com/"  rel="noopener noreferrer">
      Profile
    </a>
  </Menu.Item>
  

  <Menu.Item key="app"><About/></Menu.Item>

  <Menu.Item key="ally">
    <LogoutOutlined />
    <a href="https://colby-movie-app-2.herokuapp.com/logout"  rel="noopener noreferrer">
      Logout
    </a>
  </Menu.Item>
  
</Menu>
 );
}
export default HeaderMenu;