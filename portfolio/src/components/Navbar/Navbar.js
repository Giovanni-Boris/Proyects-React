import './navbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import { useRef } from "react";
import Menu from '../Menu/Menu';
const Navbar = () => {
	//const [state, setState] = useState(initialState)
	let refMenu = useRef(),
	 	refMenuBtn = useRef();
	console.log("Renderizando");
	const handleToggleMenu = ()=>{
		console.log(refMenuBtn);
		if(refMenu.current.classList[1]==="active"){
			refMenu.current.classList.remove("active");
			refMenuBtn.current.classList.remove("active");
		}else{
			refMenu.current.classList.add("active");
			refMenuBtn.current.classList.add("active");
		}
	}
	return (
		<>
			<div ref={refMenu} className="navbar">
				<div className="wrapper">
					<div className="left">
						<a href="#intro" className="logo">genius.</a>
						<div className="itemContainer">
							<PersonIcon className="icon"/>
							<span>+51 112 11 10</span>
						</div>
						<div className="itemContainer">
							<MailIcon className="icon"/>
							<span>fake Genius</span>
						</div>
					</div>
					<div className="right" onClick={handleToggleMenu}>
						<div className="hamburger">
							<span className="line1"></span>
							<span className="line2"></span>
							<span className="line3"></span>
						</div>
					</div>
				</div>
			</div>
			<Menu refBtn={refMenuBtn} handleToggleMenu={handleToggleMenu}/>
		</>
	)
}

export default Navbar