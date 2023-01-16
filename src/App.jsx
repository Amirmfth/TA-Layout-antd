import { Layout, Typography , Menu } from "antd";
import { Route, Routes  } from "react-router";
import {Link} from 'react-router-dom'
import { Menu1 } from "./pages/menu1";
import { Menu2 } from "./pages/menu2";
import { Menu3 } from "./pages/menu3";

export function App() {
    const items = [
        {
            label: <Link to="/menu1" >Item 1</Link>,
            key: "menu 1",
        },
        {
            label: <Link to="/menu2" >Item 2</Link>,
            key: "menu 2",
        },
        {
            label: <Link to="/menu3" >Item 3</Link>,
            key: "menu 3",
        },
    ]
  return (
  
      <Layout style={{height: "100vh"}}>
        <Layout.Sider style={{padding: "20px"}}><Menu mode="vertical" items={items} ></Menu></Layout.Sider>
        <Layout>
          <Layout.Header style={{backgroundColor: "lightgray"}}>
            <Typography.Title level={4} type="success">dfgdhsgrthrgb</Typography.Title>
          </Layout.Header>
          <Layout.Content>
            <Routes>
                <Route path="/menu1" element={<Menu1/>} />
                <Route path="/menu2" element={<Menu2/>}/>
                <Route path="/menu3" element={<Menu3/>}/>
            </Routes>
          </Layout.Content>
          <Layout.Footer>
            <Typography.Text type="secondary">
              this website is powered by dhbfdghfdg <strong>C</strong> 2022
            </Typography.Text>
          </Layout.Footer>
        </Layout>
      </Layout>
  );
}
