import React from 'react';
import {Link, withRouter} from 'react-router-dom';

import logo from './logo.svg';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import linkedin from './img/linkedin.svg';
import stackoverflow from './img/stack-overflow.svg';

import OffcanvasMenu from 'react-offcanvas-menu-component';

function Menu({location}) {

	return(
		<OffcanvasMenu
			Link={Link}
			location={location}
			config={{
				push: true
			}}
			menu={[
				{text: 'Home', link: '/'},
				{text: 'Pages', link: '/page', submenu: [
					{text: 'Page 1', link: '/page/1'},
					{text: 'Page 2', link: '/page/2'}
				]},
				{text: 'Contact Us', link: '/contact'}
			]}
			header={
				<img src={logo} className="App-logo menu-logo" alt="logo" width="250" height="100" />
			}
			footer={<Footer />}
		/>
	)
}

const Footer = () => {
	return(
		<div className="social-wrap">
			<h4>Socia Networks Footer</h4>
			<ul className="social">
				<li>
					<img src={facebook} alt="facebook" />
				</li>
				<li>
					<img src={twitter} alt="twitter" />
				</li>
				<li>
					<img src={linkedin} alt="linkedin" />
				</li>
				<li>
					<img src={stackoverflow} alt="stackoverflow" />
				</li>
			</ul>
		</div>
	)
}

export default withRouter(Menu);