import { Manager } from 'socket.io-client';

export const manager = new Manager('http://localhost:3210', {
  autoConnect: false,
});
