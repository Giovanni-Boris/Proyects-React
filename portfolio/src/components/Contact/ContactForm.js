import {useForm} from '../../hooks/useForm'
import Loader from '../Loader/Loader'
import Message from '../Message/Message'
//definir la estrucurra base y evitar warning
const initialForm = {
	name:"",
	email:"",
	subject:"",
	comments:"",
};
const validationsForm = (form)=>{
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
	if(!form.name.trim()){
		errors.name = "The name field is required"
	}else if(!regexName.test(form.name.trim())){
		errors.name = "The name field only accepts letters and blanks"
	}
	if(!form.email.trim()){
		errors.email = "The Email field is required"
	}else if(!regexEmail.test(form.email.trim())){
		errors.email = "Email field is incorrect"
	}
	if(!form.subject.trim()){
		errors.subject = "The subject field is required"
	}
	if(!form.comments.trim()){
		errors.comments = "The Comment field is required"
	}else if(!regexComments.test(form.comments.trim())){
		errors.comments = "The field comments must not access the 255 character"
	}
	return errors;
};
let styles ={
	fontWeight:"bold",
	color:"#dc3545"
}
const ContactForm = () => {
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit
	} = useForm(initialForm,validationsForm);
	return (
		<>
			<h2>Contact</h2>
			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					name="name" 
					placeholder="Write your name" 
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.name} 
					required
				/>
				{errors.name && <p style={styles}>{errors.name}</p>}
				<input 
					type="email" 
					name="email" 
					placeholder="Write your email" 
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.email} 
					required
				/>
				{errors.email && <p style={styles}>{errors.email}</p>}
				<input 
					type="text" 
					name="subject" 
					placeholder="Write a subject" 
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.subject} 
					required
				/>
				{errors.subject && <p style={styles}>{errors.subject}</p>}
				<textarea 
					name="comments" 
					cols="50" 
					rows="5"
					placeholder="Write your comment"
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.comments} 
					required
				></textarea>
				{errors.comments && <p style={styles}>{errors.comments}</p>}
				<input type="submit" value="Submit"/>
				{loading && <Loader/>}
				{response && (
					<Message msg="Your message has been sent" bgColor="#198754"/>
				)}

			</form>
		</>
	)
}

export default ContactForm