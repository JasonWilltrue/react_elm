import React, { Component } from 'react';
import styles from './index.less';

class Snapped extends Component {
	render() {
		return (
			<div className={styles.snapped}>
				<div className={styles['snapped-group']}>
					<div className={styles['snapped-item']}>
						<h3>品质套餐</h3>
						<p className={styles['snapped-title2']}>搭配齐全吃的好</p>
						<p className={styles['snapped-title3']}>立即抢购</p>
						<img
							src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"
							alt=""
						/>
					</div>
				</div>
				<div className={styles['snapped-group']}>
					<div className={styles['snapped-item']}>
						<h3>限量抢购</h3>
						<p className={styles['snapped-title2']}>超值美味9.9元起</p>
						<p className={styles['snapped-title3']}>786人正在抢</p>
						<img
							src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"
							alt=""
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Snapped;
