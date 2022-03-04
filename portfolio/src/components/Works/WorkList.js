
const WorkList = ({img,title,description}) => {
	return (
		<div className="container">
			<div className="item">
				<div className="left">
					<div className="leftContainer">
						<div className="imgContainer">
							<img src={img} alt="mobile"/>
						</div>
						<h2>{title}</h2>
						<p>
							{description}
						</p> 
						<span>Project</span>
					</div>
				</div>
				<div className="right">
					<img
            			src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
            			alt=""
          			/>
				</div>
		  </div>
		</div>
	)
}

export default WorkList