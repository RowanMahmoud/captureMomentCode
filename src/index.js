import React from 'react';
import {BrowserRouter, Switch,browserHistory, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Components/Home';

// class Appp extends React.Component{
//   render() {
//     return(
//       <Router history={browserHistory}>
//         <Route path = {"/"} Component={Root}> 
//            <IndexRoute component= {Home}> </IndexRoute>
         

//          </Route>
//           <Route path = {"Home-single"} component={Home}></Route>
//       </Router>
//     );
//   }
// }
// render (<Appp/>,window.document.getElementById('Appp'));

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
  <div>
  {/* <Route component={About}/> */}
    {/* <Route path = {"About"} component = {About}></Route> */}
    {/* <Route exactpath = {"SignUp"} component = {SignUp}></Route> */}
    </div>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
