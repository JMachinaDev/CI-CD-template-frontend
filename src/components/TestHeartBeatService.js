import React, { useState, useEffect } from 'react';
import HeartbeatService from '../services/heartbeatservice';

const Test = () => {
  const [content, setContent] = useState('');
  const pingTest = new HeartbeatService().pingTest();


  useEffect(() => {
    pingTest
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
    <div className="test container">
      <h3>{content}</h3>
    </div>
  )
}
export default Test;
