import ChatClone from "./components/chat/ChatClone";
import Navbar from "./components/navbar/Navbar";
import SignUp from "./components/form/signup/SignUp";
import Login from "./components/form/login/Login";
import NavBarConnected from "./components/navbar/NavBarConnected";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const connected = useSelector((state) => state.connected);
  console.log(connected);
  let nav = connected ? <NavBarConnected /> : <Navbar />;
  return (
    <Router>
      {nav}
      <Switch>
        <Route exact path="/" component={ChatClone} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
