import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import TabBarContainer from './features/tabs/TabBarContainer';

const {
	Header,
	Content,
} = Layout;

class App extends Component {
	render() {
		const tabs = [
			{name: 'Unit Info', content: 'First'},
			{name: 'Pilots', content: 'Second'},
			{name: 'Mechs', content: 'Third'},
			{name: 'Unit Organization', content: 'Fourth'}
		];

		return (
			<Layout className="layout">
				<Header className="app-header">
					<img src={logo} className="app-logo" alt="logo"/>
					Project Mini-Mek
				</Header>
				<Content>
					<TabBarContainer tabs={tabs} />
				</Content>
			</Layout>
		);
	}
}

export default App;
