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
		errors.name = "El campo Nombre es requerido"
	}else if(!regexName.test(form.name.trim())){
		errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
	}
	if(!form.email.trim()){
		errors.email = "El campo Email es requerido"
	}else if(!regexEmail.test(form.email.trim())){
		errors.email = "El campo 'Email' es incorrecto"
	}
	if(!form.subject.trim()){
		errors.subject = "El campo Asunto a tratar es requerido"
	}
	if(!form.comments.trim()){
		errors.comments = "El campo Comentario es requerido"
	}else if(!regexComments.test(form.comments.trim())){
		errors.comments = "El campo 'Comentarios' no debe acceder los 255 caracteres"
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
					placeholder="Escribe tu nombre" 
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.name} 
					required
				/>
				{errors.name && <p style={styles}>{errors.name}</p>}
				<input 
					type="email" 
					name="email" 
					placeholder="Escribe tu email" 
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.email} 
					required
				/>
				{errors.email && <p style={styles}>{errors.email}</p>}
				<input 
					type="text" 
					name="subject" 
					placeholder="Asunto a tratar" 
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
					placeholder="Escribe tus comentario"
					onChange={handleChange} 
					onBlur={handleBlur}
					value={form.comments} 
					required
				></textarea>
				<input type="submit" value="Enviar"/>
				{errors.comments && <p style={styles}>{errors.comments}</p>}
				{loading && <Loader/>}
				{response && (
					<Message msg="Los datos han sido enviados" bgColor="#198754"/>
				)}

			</form>
		</>
	)
}

export default ContactForm