import React, { FC } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { Layout as LayoutUI, Menu, Breadcrumb } from 'antd';

// types
import { ILayoutProps } from './types';

// styles
import s from './Layout.css';
import g from '../../global.css';
// import a1 from 'antd/es/layout/style/index.css';
// import a2 from 'antd/es/menu/style/index.css';
// import a3 from 'antd/es/breadcrumb/style/index.css';
// import a4 from 'antd/es/style/index.css';

const { Header, Content, Footer } = LayoutUI;

export const Layout: FC<ILayoutProps> = ({ children }) => {
  useStyles(s);
  useStyles(g);
  // useStyles(a1);
  // useStyles(a2);
  // useStyles(a3);
  // useStyles(a4);

  return (
    <LayoutUI>
      <Header>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>nav 1</Menu.Item>
          <Menu.Item key='2'>nav 2</Menu.Item>
          <Menu.Item key='3'>nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className={s.siteLayoutContent}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutUI>
  );
};
