import React from 'react'
import "./Loader.scss";
const Loader = props => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}


export default Loader