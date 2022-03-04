import './menu.scss'
import MenuListItem from './MenuListItem';
const Menu = ({refBtn,handleToggleMenu}) => {
	let menu  = [
		{href:"#intro",title:"Home"},
		{href:"#portfolio",title:"Portfolio"},
		{href:"#works",title:"Works"},
		{href:"#testimonials",title:"Testimonials"},
		{href:"#contact",title:"Contact"}
	];
	console.log("Menu hamburguesa");
	return (
		<div ref={refBtn} className="menu">
			<ul>
				{menu.map((el,index)=>(
					<MenuListItem 
						key={index}
						href={el.href} 
						title={el.title}
						handleToggleMenu={handleToggleMenu}
					/>
				))}
			</ul>
			
		</div>
	)
}

export default Menu