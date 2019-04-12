import React from 'react';
import {Tabs} from 'antd';

const TabBar = props => {
	const {tabs, activeTab, onTabClick, ...otherProps} = props;

	const tabItems = tabs.map(tabInfo => {
		const {name, content} = tabInfo;

		return (
			<Tabs.TabPane key={name}
						  tab={name}>{content}</Tabs.TabPane>
		);
	});

	return (
		<Tabs tabPosition="top"
			  activeKey={activeTab}
			  onTabClick={onTabClick}
			  {...otherProps}>{tabItems}</Tabs>
	);
};

export default TabBar;
