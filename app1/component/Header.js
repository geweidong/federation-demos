import React from 'react';
import Logo from './Logo';
import moment from 'moment';

export default () => {
	return (
		<div>
			<span>这是header</span>
			现在的时间是：<h3>{moment().format()}</h3>
			<Logo />
		</div>
	)
}