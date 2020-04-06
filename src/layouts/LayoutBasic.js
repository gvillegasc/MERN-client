import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

export default function LayoutBasic(props) {
	const { routes } = props;
	const { Header, Content, Footer } = Layout;
	console.log(props);
	return (
		<Layout>
			<h3>Menu Basic</h3>
		</Layout>
	);
}

function LoadRouters({ routes }) {
	return routes.map((route, index) => (
		<Route
			key={index}
			path={route.path}
			exact={route.exact}
			component={route.component}
		/>
	));
}
