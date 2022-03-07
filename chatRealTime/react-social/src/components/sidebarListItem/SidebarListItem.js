import "./sidebarListItem.css";
const SidebarListItem = ({Icon, options}) => {
	return (
		<li className="sidebarListItem">
          	<Icon className="sidebarIcon"/>
            <span className="sidebarListItemText">{options}</span>
        </li>
		
	)
}

export default SidebarListItem