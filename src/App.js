import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from './pages/AllProducts/AllProducts';
import AuthProvider from "./pages/contexts/AuthProvider/AuthProvider";
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Home from "./pages/HomePage/Home/Home";
import Login from './pages/LoginPage/Login/Login';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute';
import SignUp from './pages/LoginPage/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Purchase from './pages/Purchase/Purchase';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/products">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
