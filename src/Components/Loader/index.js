import React from 'react';
import './Loader.scss';

const Loader = props => {
	const withWrapper = () => (
		<div
			className={
				props.hasOverlay
					? 'loader-wrapper overlay'
					: 'loader-wrapper'
			}>
			{withoutWrapper()}
		</div>
	);
	const withoutWrapper = () => {
		let classList = ['loader'];
		if (
			props &&
			props.classList &&
			typeof props.classList === 'object'
		)
			classList = classList.concat(props.classList);
		let list = [];
		for (let i = 0; i < 13; i++) {
			list.push(<div key={i} className='loader__item' />);
		}
		return <div className={classList.join(' ')}>{list}</div>;
	};
	if (props && props.hasWrapper) return withWrapper();
	else return withoutWrapper();
};
export default Loader;
