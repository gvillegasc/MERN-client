import React from 'react';
import { DatePicker } from 'antd';

import './App.scss';

function App() {
	const test = date => {
		console.log(date);
	};

	return (
		<div className="app">
			<h1>Web Personal cliente</h1>
			<h2>Proyecto</h2>
			<DatePicker onChange={test} />
		</div>
	);
}

export default App;
