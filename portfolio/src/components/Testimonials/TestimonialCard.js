
const TestimonialCard = ({img,icon,desc,name,title,featured}) => {
	return (
		<div className={featured ? "card featured" : "card"}>
			<div className="top">
				<img src="assets/right-arrow.png" className="left" alt=""/>
				<img 
					className="user"
					src={img}
					alt=""
				/>
	      				
	      <img className="right" src={icon} alt=""/>
			</div>
			<div className="center">
				{desc}
			</div>
			<div className="bottom">
				<h3>{name}</h3>
				<h4>{title}</h4>
			</div>
		</div>
	)
}

export default TestimonialCard