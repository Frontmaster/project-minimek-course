import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from './sample-component';
import { Button } from 'antd'

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Project Mini-Mek</h2>
				</header>
				<SampleComponent />
				<Button type="primary">Button</Button>
			</div>
		);
	}
}

export default App;
