const io = require("socket.io",{
	cors: {
		origin: "http://localhost:3000",
	},
});

io.on("connection",(socket)=>{
	console.log(" a user connected. ");
})