import './portfolio.scss';
import PortfolioList from "../PortfolioList/PortfolioList";
import PortfolioItem from "./PortfolioItem";
import{ useState,useEffect } from 'react';
import{
	featuredPortfolio,
	webPortfolio,
	mobilePortfolio,
	designPortfolio,
	contentPortfolio,
}  from "../../data"; 
const list = [
	    {
	      id: "featured",
	      title: "Featured",
	    },
	    {
	      id: "web",
	      title: "Web App",
	    },
	    {
	      id: "mobile",
	      title: "Mobile App",
	    },
	    {
	      id: "design",
	      title: "Design",
	    },
	    {
	      id: "content",
	      title: "Content",
	    },
  	];
const Portfolio = () => {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	useEffect(() => {
		switch(selected){
			case "feature":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			case "mobile":
				setData(mobilePortfolio);
				break;
			case "design":
				setData(designPortfolio);
				break;
			case "content":
				setData(contentPortfolio);
				break;
			default:
				setData(featuredPortfolio);
		}
	}, [selected])
	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((item,index)=>(
					<PortfolioList 
						key={index}
						title={item.title}
						active={selected===item.id}
						setSelected={setSelected}
						id={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((el)=>(
					<PortfolioItem
						key={el.title}
						src={el.img}
						title={el.title}
					/>
				))}
				
			</div>

		</div>
	)
}

export default Portfolio