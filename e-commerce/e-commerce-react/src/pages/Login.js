import styled from "styled-components";
import {mobile} from "../responsive";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
	width: 100vw;
  	height: 100vh;
	background:linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), 
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
 `; 

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: #fff;
	${mobile({ width: "80%" })}
 `; 

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
 `; 

const Form = styled.form`
	display: flex;
	flex-direction: column;
 `; 

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
	border: none;
	border-bottom: 0.5px solid #a1a1a1;
 `; 


const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: #fff;
	cursor: pointer;
	margin-bottom: 10px;

	&:disabled{
		color: green;
		curosr: not-allowed;

	}
 `; 

const Link = styled.a`
	margin: 10px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
 `;

const Error = styled.span`
	color: red;
 ;` 

const initialForm = {
	username: "",
	password:"",
}
const Login = () => {
	console.log("hola")
	const [form, setForm] = useState(initialForm);
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector(state => state.user );
	const handleChange = (e) => {
		let {name,value} = e.target;
		setForm({
			...form,
			[name]:value,
		})
	}
	const handleSubmit = (e)=>{
		e.preventDefault();
		login(dispatch,{...form});
	}
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form onSubmit={handleSubmit}>
					<Input name="username" onChange={handleChange} placeholder="username"/>
					<Input name="password" type="password" onChange={handleChange} placeholder="password"/>
					<Button type="submit" disabled={isFetching}>LOGIN</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        	<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
				
			</Wrapper>
		</Container>
	)
}

export default Login