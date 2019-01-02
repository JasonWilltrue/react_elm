import React, { Component } from 'react';
import cls from 'classnames';
import SvgIcon from 'components/icon-svg';
import styles from './index.less';

class TopBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: false,
		};
	}
	render() {
		const { address } = this.state;

		return (
			<div className={styles.header}>
				<div className={styles.location}>
					<SvgIcon className={styles.icon} name="#location" />
					<h1 className={styles.address}>{address ? address : '正在识别地址...'}</h1>
					<SvgIcon className={styles.down} name="#triangle_down_fill" />
				</div>
				<div className={styles.search}>
					<SvgIcon className={styles.icon} name="#search" />
					<p className={styles.desc}>搜索饿了么商家、商品名称</p>
				</div>
			</div>
		);
	}
}
export default TopBar;
