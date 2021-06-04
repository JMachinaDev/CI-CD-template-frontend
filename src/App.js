import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Test from './components/TestHeartBeatService';

const App = () => {

  return (
    <>
      <nav>
        <Link to={"/", "/home"} className="navbar-home">Home Page</Link>
        <Link to={"/test"} className="navbar-test">Test Page</Link>
      </nav>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </>
  );
};

export default App;
