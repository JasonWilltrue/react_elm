import React, { Component } from 'react';
import SvgIcon from 'components/icon-svg';
import Modal from 'components/modal';
import styles from './index.less';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			captchaVisible: true,
		};
	}
	render() {
		const { captchaVisible } = this.state;
		return (
			<div className={styles.login}>
				<div className={styles.logo}>
					<SvgIcon name="#logo" />
				</div>
				<div className={styles.form}>
					<div className={styles.item}>
						<input type="tel" maxLength={11} placeholder="手机号" />
						<button className={styles['code-btn']}>{1 == 1 ? `60秒后获取` : '获取验证码'}</button>
					</div>
					<div className={styles.item}>
						<input type="tel" maxLength={8} placeholder="验证码" />
					</div>
				</div>
				<p className={styles.desc}>
					温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<span>《用户服务协议》</span>
				</p>
				<button className={styles['login-btn']}>登录</button>
				{/* 弹窗模型 */}
				<Modal visible={captchaVisible}>
					<div className={styles['captcha-modal']} key="a">
						<div className={styles.body}>
							<h1 className={styles.title}>请填写图形验证码</h1>
							<div className={styles.item}>
								<input maxLength={11} />
								<img className={styles.img} />
							</div>
							<div className={styles.footer}>
								<div className={styles.reset}>取消</div>
								<div className={styles.submit}>确认</div>
							</div>
						</div>
						<div className={styles.mask} />
					</div>
				</Modal>
			</div>
		);
	}
}

export default Login;
