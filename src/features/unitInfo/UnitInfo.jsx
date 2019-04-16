import React from 'react';
import {Form, Input, Select, Row, Col} from 'antd';

const FACTIONS = [
	{value : "cc", text : "Capellan Confederation"},
	{value : "dc", text : "Draconis Combine"},
	{value : "fs", text : "Federated Suns"},
	{value : "fwl", text : "Free Worlds League"},
	{value : "lc", text : "Lyran Commonwealth"},
];

const formItemLayout = {
	labelCol: {
		xs: { span: 8 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 16 },
		sm: { span: 16 },
	},
};

const UnitInfo = () => (
	<Row type="flex" justify="center">
		<Col xs={{span: 22}} sm={{span: 16}} md={{span: 8}}>
			<Form {...formItemLayout}>
				<Form.Item label="Unit name">
					<Input placeholder="Name" />
				</Form.Item>
				<Form.Item label="Affiliation">
					<Select allowClear={true}>
						{
							FACTIONS.map(item => {
								const {value, text} = item;

								return <Select.Option key={text} value={value}>{text}</Select.Option>
							})
						}
					</Select>
				</Form.Item>
			</Form>
		</Col>
	</Row>
);

export default UnitInfo;