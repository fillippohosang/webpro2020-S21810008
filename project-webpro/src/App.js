// import './App.css';
// import Card from './Components/card';
// import {person} from './Utils/person';
// import Counter from "./Components/counter" 

// function App() {
//   return (
//     <>
//       {/*person.map((item) =>{
//         return(
//           <Card
//             name={item.name}
//             institution={item.institution}
//             address={item.address}
//             phone={item.phone}
//           />
//         );
//       })*/}
//       <Counter title = "Counter Component"/>
//     </>
//   );
// }

// export default App;

// import React, {Component} from 'react'
// import Card from "./Components/Card.js"
// import "./App.css"
// import axios from 'axios';

// class App extends Component {
//     state = {
//         users: [],
//     };

//     componentDidMount(){
//         axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then((response) => this.setState({users: response.data}))
//     }
//     render(){
//         return(
//             <>
//                 {this.state.users.map((item)=>{
//                     return(
//                         <Card
//                             name={item.name}
//                             username={item.username}
//                             email={item.email}
//                             phone={item.phone} 
//                         />
//                     )
//                 })}
//             </>
//         )
//     }
// }

// Menggunakan Function

// const App = () =>{
//     const [users, setUsers] = useState([])

//     useEffect(() => {
//         axios
//             .get("https://jsonplaceholder.typicode.com/users")
//             .then((response) => setUsers(response.data))
//     }, [])
//     console.log(users)
//     return(
//         <>
//             {
//                 users.map((item) =>{
//                     return(
//                         <Card
//                             name={item.name}
//                             username={item.username}
//                             email={item.email}
//                             phone={item.phone} 
//                         />
//                     )
//                 })
//             }
//         </>
//     )
// }

import React from "react";
import "./App.css"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Login from "./Pages/Login.js"
import Home from "./Pages/Home.js"
import Register from "./Pages/Register.js"

const App = () =>{
  return (
      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/home">
                              Home
                          </Link>
                      </li>
                      <li>
                          <Link to="/login">
                              Login
                          </Link>
                      </li>
                      <li>
                          <Link to="/register">
                              Register
                          </Link>
                      </li>
                  </ul>
              </nav>
          </div>
          <p><center> Hallo Sahabat </center></p>
          <Switch>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/register">
                  <Register />
              </Route>
              <Route path="/home">
                  <Home />
              </Route>
          </Switch>
      </Router>
  )
}

export default App