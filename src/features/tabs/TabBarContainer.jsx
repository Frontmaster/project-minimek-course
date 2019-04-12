import React from 'react';
import TabBar from './TabBar';

export default class TabBarContainer extends React.Component {
	constructor(props) {
		super(props);

		const {tabs = [{name: null}]} = props;
		const firstTab = tabs[0];

		this.state = {
			activeTab: firstTab.name
		};
		this.tabClickHandler = this.tabClickHandler.bind(this);
	}

	tabClickHandler(name) {
		this.setState({activeTab: name});
	}

	render() {
		const {tabs, ...otherProps} = this.props;
		const {activeTab} = this.state;

		return (
			<TabBar tabs={tabs}
					activeTab={activeTab}
					onTabClick={this.tabClickHandler}
					{...otherProps}/>
		);
	}
}
