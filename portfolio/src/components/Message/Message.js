import React from 'react'

const Message = ({msg,bgColor}) => {
	let styles = {
		padding:".7rem",
		marginBottom:"1rem",
		textAlign:"center",
		color:"#fff",
		fontWeight:"bold",
		backgroundColor:bgColor,
		borderRadius:"10px"

	}
	return (
		<div style={styles}>
			<p>{msg}</p>
			{/*<p dangerouslySetInnerHTML={{__html:msg}}/>*/}
		</div>
	)
}

export default Message