import React from 'react';
import GeraLogo from '../../../assets/images/png/logo-white.png';
import { Layout, Button, Icon } from 'antd';

import './MenuTop.scss';

export default function MenuTop() {
	return (
		<div className="menu-top">
			<div className="menu-top__left">
				<img
					className="menu-top__left-logo"
					src={GeraLogo}
					alt="Gerardo Villegas"
				/>
				<Button type="link" onClick={() => console.log('Clic')}>
					<Icon type="menu-fold" />
				</Button>
			</div>
			<div className="menu-top__right">
				<Button type="link">
					<Icon type="poweroff" />
				</Button>
			</div>
		</div>
	);
}
