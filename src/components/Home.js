import React, { useState, useEffect } from 'react';
import HeartbeatService from '../services/heartbeatservice';


const Home = () => {
  const [content, setContent] = useState('');
  const ping = new HeartbeatService().ping();


  useEffect(() => {
    ping
      .then((response) => {
        console.log(response);
        setContent(response.data);
      })
      .catch(error => {
        console.error(error);
        setContent({ error: error });
      })
  }, []);

  return (
    <div className="home container">
      <h3>{content}</h3>
    </div>
  )
}
export default Home;
