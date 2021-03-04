import React, { useState } from 'react';
import './App.css';
import Signin from './components/layout/Signin/Signin';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
import NotFound from './components/layout/NotFound/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  // const [auth, setAuth] = useState(true)

  return (
    <div className="App">
      {/* <Signin />
      <Dashboard /> */}
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <PrivateRouter exact path="/dashboard" component={Dashboard} auth={auth} /> */}
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/view/:id" component={ViewUser} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}


// private route

// const PrivateRouter = ({ auth, component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={
//         props => auth ?
//           (<Component {...props} />)
//           : (<Redirect to={{ pathname: "/" }} />)
//       }
//     />
//   )
// }

// function display(auth) {
//   return ({
//     display: auth ? "block" : "name"
//   })
// }

export default App;
