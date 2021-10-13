import React from 'react';
import ReactDom from 'react-dom';

import './modal.css';

const Modal = ({ isOpen, onCloseHandler, header, children, clickHandler }) => {
	if (isOpen) {
		const content = (
			<>
				<div className='overlay' onClick={onCloseHandler}></div>
				<div className='modal-container'>
					<header className='modal-header'>{header}</header>
					<div className='modal-content'>{children}</div>
					<footer className='modal-footer'>
						<button onClick={clickHandler}>Go to Store</button>
					</footer>
				</div>
			</>
		);
		return ReactDom.createPortal(
			content,
			document.getElementById('modal-hook')
		);
	}
	return null;
};
export default Modal;
