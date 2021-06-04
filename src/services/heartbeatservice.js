import http from '../http-common';

class HeartbeatService {
  ping() {
    console.log('Successfully checked API heartbeat, connection established')
    return http.get('/');
  };

};

export default HeartbeatService;
