/*eslint-disable*/
import React, { Component } from 'react';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';
import cls from 'classnames';
// import { addClass } from 'utils/dom';
import styles from './index.less';
/**
 * loop           无缝轮播
 * autoPlay       自动播放
 * interval       时间间隔
 * showDot        是否显示dot
 * click          派发点击时间
 * threshold      可滚动到下一个的阈值
 * speed          滚动速度
 */

class Slide extends Component {
	render() {
		return (
			<div className={styles.slide}>
				<div className={styles['slide-group']}>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>美食</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>午餐</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt="商超便利"
						/>
						<a>商超便利</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>水果</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>医疗健康</a>
					</div>
				</div>
				<div className={styles['slide-group']}>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>美食</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/c/e9/8b589472823fa97666cef19af644cjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>午餐</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt="商超便利"
						/>
						<a>商超便利</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>水果</a>
					</div>
					<div className={styles['slide-item']}>
						<img
							src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
							alt=""
						/>
						<a>医疗健康</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Slide;
