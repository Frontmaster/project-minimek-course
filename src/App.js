import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Menu} from 'antd';

const {
	Header,
	Content,
	Footer
} = Layout;

class App extends Component {
	render() {
		return (
			<Layout className="layout">
				<Header className="app-header">
					<img src={logo} className="app-logo" alt="logo"/>
					Project Mini-Mek
				</Header>
				<Content>
					<Menu mode="horizontal" selectedKeys={['unitInfo']}>
						<Menu.Item key="unitInfo">Unit Info</Menu.Item>
						<Menu.Item key="pilots">Pilots</Menu.Item>
						<Menu.Item key="mechs">Mechs</Menu.Item>
						<Menu.Item key="unitOrganization">Unit Organization</Menu.Item>
					</Menu>
				</Content>
				<Footer></Footer>
			</Layout>
		);
	}
}

export default App;
