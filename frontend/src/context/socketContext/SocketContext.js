import { createContext } from 'react';
import socket from 'socket.io-client';
const io = socket.connect();
const SocketContext = createContext();

export { io, SocketContext };
