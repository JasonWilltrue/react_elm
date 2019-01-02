import React, { Component } from 'react';
import TopBar from './top-bar';
import Slide from 'components/slide';
import Snapped from 'components/snapped';
import styles from './index.less';

class Home extends Component {
	render() {
		return (
			<div className={styles.root}>
				<TopBar />
				<Slide />
				<Snapped />
			</div>
		);
	}
}

export default Home;
