import React from 'react'

const MenuListItem = ({href,title,handleToggleMenu }) => {
	return (
		<li onClick={handleToggleMenu}>
			<a href={href}>{title}</a>
		</li>
	)
}

export default MenuListItem