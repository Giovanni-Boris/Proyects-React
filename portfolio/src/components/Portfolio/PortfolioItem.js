import React from 'react'

const PortfolioItem = ({src,title}) => {
	return (
		<div className="item">
			<img src={src}
				alt={title}
			/>
			<h3>{title}</h3>
		</div>
	)
}

export default PortfolioItem