import React, { FC } from 'react';
// @ts-ignore
import useStyles from 'isomorphic-style-loader/useStyles';
import { Layout as LayoutUI, Menu, Breadcrumb } from 'antd';

// components
import { Counter } from 'components/Counter/Counter';

// types
import { ILayoutProps } from './types';

// styles
import s from './Layout.css';
import g from '../../global.css';

const { Header, Content, Footer } = LayoutUI;

export const Layout: FC<ILayoutProps> = () => {
  useStyles(s);
  useStyles(g);

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
          Content:
          <Counter />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </LayoutUI>
  );
};
