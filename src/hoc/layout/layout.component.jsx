import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;

class PageLayout extends React.Component {
  state = {
    collapsed: true
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="heart" />
              <span>Option 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#414141",
              padding: 0,
              textAlign: "center",
              color: "white"
            }}
          >
            Header
          </Header>
          <Content style={{ margin: "0 0px" }}>{this.props.children}</Content>
          <Footer
            style={{
              textAlign: "center",
              color: "white",
              background: "#414141"
            }}
          >
            ©2020 Created Phillip Pargmann
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
