import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import ProtectedRoute from './ProtectedRoute';
import ColorList from "./components/ColorList";



function App() {
  const [colorList, setColorList] = useState([]);
  return (
    
    // const protectRoute = Component => props => {
    //   if (localStorage.getItem('token')) {
    //     return <Component {...props} />;
    //   } else {
    //     return <Redirect to="/login"/>;
    //   }
    // };
    
    // const ProtectedBubblePage = protectRoute(BubblePage);

  
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
    <ProtectedRoute to='/bubbles' />
      </div>
    </Router>
  );
}

export default App;
