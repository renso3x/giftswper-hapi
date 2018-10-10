import Hapi from 'hapi';
import route from './route';

const server = Hapi.server({
    host: 'localhost',
    port: 8000
});

route(server);

export default server;

