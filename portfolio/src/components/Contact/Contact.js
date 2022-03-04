import React from 'react'
import './contact.scss'
import ContactForm from './ContactForm';
const Contact = () => {
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" alt=""/>
			</div>
			<div className="right">
				<ContactForm/>
			</div>
				
		</div>
	)
}

export default Contact