import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout} from 'antd';
import TabBarContainer from 'features/tabs/TabBarContainer';
import Mechs from 'features/mechs/Mechs';
import Pilots from 'features/pilots/Pilots';
import UnitInfo from 'features/unitInfo/UnitInfo';
import UnitOrganization from 'features/unitOrganization/UnitOrganization';

const {
	Header,
	Content,
} = Layout;

class App extends Component {
	render() {
		const tabs = [
			{name: 'Unit Info', component: UnitInfo},
			{name: 'Pilots', component: Pilots},
			{name: 'Mechs', component: Mechs},
			{name: 'Unit Organization', component: UnitOrganization}
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
