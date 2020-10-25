import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { UserPage } from './pages/User';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Layout>
          <Route path='/home' component={Home} />
          <Route path='/user' component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
