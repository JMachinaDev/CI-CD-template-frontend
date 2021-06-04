import http from '../http-common';

// retrieve data/routes from server/api
class HeartbeatService {
  ping() {
    console.log('Successfully checked API heartbeat, connection established')
    return http.get('/');
  };
  pingTest() {
    console.log('Successfully checked test route');
    return http.get('/test');
  }
};

export default HeartbeatService;
