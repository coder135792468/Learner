const socketManager = (socket) => {
	socket.on('update', (id) => {
		socket.broadcast.emit('update', id);
	});
	socket.on('endgame', (id) => {
		socket.broadcast.emit('endgame', id);
	});
	socket.on('delete', (id) => {
		socket.broadcast.emit('delete', id);
	});
	socket.on('add', (name) => {
		socket.broadcast.emit('add', name);
	});
};

export default socketManager;
