import React, { useState, useEffect } from 'react';
import HeartbeatService from './services/heartbeatservice';

const App = (props) => {
  const checkAPI = new HeartbeatService();
  const [data, setData] = useState();

  useEffect(() => {
    checkAPI.ping()
      .then(response => {
        setData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error(error);
        setData({ error: error });
      })
  }, []);

  return (
    <pre>
      {JSON.stringify(data, null, 2)};
    </pre>
  );
}

export default App;
