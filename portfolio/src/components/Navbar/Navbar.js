import './navbar.scss';
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="left">
					<a href="#intro" className="logo">genius.</a>
					<div className="itemContainer">
						<Persona className="icons"/>
						<span>+51 112 11 10</span>
					</div>
					<div className="itemContainer">
						<Mail className="icons"/>
						<span>fake Genius</span>
					</div>
				</div>
				<div className="right">
					thisi is right
				</div>
			</div>
		</div>
	)
}

export default Navbar