//MINI AXIOS hecho artesanalemte
export const helpHttp = () =>{
	//custom fetch va a ser ejecutado dentro de los 4 metodos
	const customFetch = (endpoint,options)=>{
		//puedes aumentar o disminiur 
		const defaultHeaders = {
			accept:"application/json",
		}
		//cancelar peticion manualmente que  se ah quedado ciclado por algun error de la api
		const controller = new AbortController();
		options.signal = controller.signal;
		//si no existe options-method usa get
		options.method =  options.method || "GET";
		options.headers = options.headers
		?{...defaultHeaders,...options.headers}
		:defaultHeaders;
		//si existe body debido a la GET que parseas sino false porque body false mas adelante voy a hacer una validacion
		//no podemos enviar body false o vacio por eso lo eliminamos
		options.body = JSON.stringify(options.body) || false;
		if(!options.body) delete options.body;
		//console.log(options);
		//si la api no me responde aborto la peticion fetch
		setTimeout(() => controller.abort(), 3000);
		//"hay algunas api que nos dan status tambien status text "
		return fetch(endpoint, options)
	      .then((res) =>
	        res.ok
	          ? res.json()
	          : Promise.reject({
	              err: true,
	              status: res.status || "00",
	              statusText: res.statusText || "Ocurrió un error",
	            })
	      )
	      .catch((err) => err);
	};
	const get = (url,options={})=>customFetch(url,options);
	const post = (url,options={})=>{
		options.method = "POST";
		return customFetch(url,options)
	}
		
	const put = (url,options={})=>{
		options.method = "PUT";
		return customFetch(url,options)
		
	}
	const del = (url,options={})=>{
		options.method = "DELETE";
		return customFetch(url,options)
	};

	return {
		get,
		post,
		put,
		del,
	};

}