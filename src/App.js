import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import MoreProducts from './Pages/MoreProducts/MoreProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';

// testing code push
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/moreProducts">
              <MoreProducts></MoreProducts>
            </Route>
            <PrivateRoute path="/placeOrder/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>      
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
