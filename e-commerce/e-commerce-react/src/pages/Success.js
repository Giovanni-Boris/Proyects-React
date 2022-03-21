import { useLocation } from "react-router-dom";
const Success = () => {
	const location = useLocation();
	console.log(location)
	return (
		<div>
			Successfill
		</div>
	)
}

export default Success