import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import  { useState } from 'react';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const Headerbar = (props) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = JSON.parse(localStorage.getItem("user"))
  
  return (
    <div>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to="/home">Home</Link>,
            
              
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <Link to="/addpost">Addpost</Link>,
              
            },
            {
              key: '3',
              icon: <UploadOutlined /> ,
              label: <Link to={`/profile/${user._id}`}>Profile</Link>,
            },
            {
              key: '4',
              icon: <UsergroupAddOutlined />,
              label: <Link to="/alluser">Follow unfollow</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout bs1">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight:330,
            background: colorBgContainer,
          }}
        >
         {props.children}
        </Content>
      </Layout>
    </Layout>
    </div>
  )
}

export default Headerbar
