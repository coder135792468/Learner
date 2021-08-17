const socketManager = (socket) => {
	socket.on('update', (id) => {
		socket.broadcast.emit('update', id);
	});
	socket.on('delete', (id) => {
		socket.broadcast.emit('delete', id);
	});
};

export default socketManager;
