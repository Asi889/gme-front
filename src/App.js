import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { ThemeProvider } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import checkLoggedIn from './services/checkLoggedIn'
import { CheckCircleSharp } from '@material-ui/icons';
// import { theme } from './components/themeMaterial'

const App = inject('profileList', 'profile')(observer((props) => {

  const [userData, setUserData] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogIn = function (bol) {
    setLoggedIn(true)
  }

  useEffect(() => {

    const check = async () => {


      let token = localStorage.getItem("auth-token");

      if (token === '' || token === null || token === undefined) {
        localStorage.setItem('auth-token', '');
        token = ""
      }
      console.log(token);

      const tokenRes = await axios.post(
        "http://localhost:3001/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      )
      console.log(tokenRes.data)
      if (tokenRes.data) {
        const userRes = await axios.get('http://localhost:3001',
          {
            headers: { 'x-auth-token': token },
          })
        console.log(userRes.data)
          props.profileList.getProfileList(userRes.data)
          setLoggedIn(true)
        // return (userRes.data, token)

        // props.profilelist.getProfileList(userRes.data, token)


      }
      // const g= await checkLoggedIn()
      // console.log(g);

      // if(g.token){
      //   console.log(g.token);

      // }
    }
    check()

    // const checkL = async () => {

    //   const token = localStorage.getItem("auth-token");

    //   if (token === null) {
    //     localStorage.setItem('auth-token', '');
    //     token = ""
    //   }

    //   const tokenRes = await axios.post(
    //     "http://localhost:3001/tokenIsValid",
    //     null,
    //     { headers: { "x-auth-token": token } }
    //   )

    //   if (tokenRes.data) {

    //     const userRes = await axios.get('http://localhost:3001',
    //       {
    //         headers: { 'x-auth-token': token },
    //       })

    //     }
    //   }
    // checkL()



  }, []);

  // console.log(userData);

  return (

    <div className="App">
      <ThemeProvider>
        <Router>
          {loggedIn
            ?
            (<Redirect to="/" />)
            :
            (<Redirect to="/logIn" />)

          }
          <Switch>
            <Route exact path='/' exact render={() => <Feed />} />
            <Route  path='/logIn' exact render={() => <LogIn />} />
            <Route  path='/signUp' exact render={() => <SignUp logIn={handleLogIn} />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );




}))



// function App() {
//   return (

//     <div className="App">
//       <ThemeProvider>
//       <Router>
//         <Switch>
//           <Route exact path='/' exact render={() => <Feed />} />
//           <Route path='/login' exact render={() => <LogIn />} />
//           <Route path='/signUp' exact render={() => <SignUp />} />
//         </Switch>
//       </Router>
//       </ThemeProvider>
//     </div>
//   );
// }

export default App;
