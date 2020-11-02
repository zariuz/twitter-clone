import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { UserPage } from './pages/User';
import { AuthApi } from './services/api/authApi';
import { setUserData } from './store/ducks/user/actionCreators';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const checkAuth = async () => {
    try {
      const { data } = await AuthApi.getMe();
      dispatch(setUserData(data));
      history.replace('/home');
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/user" component={UserPage} />
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
