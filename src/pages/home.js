import React from 'react';
import logo from './../logo.svg';

function Home() {
	
	return(
		<div className="main">
			<h1>React Offcanvas Menu</h1>
			<img src={logo} className="App-logo" alt="logo" />
				<p>
					get it with: <br/><code>npm i react-offcanvas-menu-component</code>
				</p>
			<a
				className="App-link"
				href="https://www.npmjs.com/package/react-offcanvas-menu-component"
				target="_blank"
				rel="noopener noreferrer"
			>
				documentation and description
			</a>
		</div>
	)
}

export default Home;