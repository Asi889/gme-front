// import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
// import theme from './components/themeMaterial'
// import darkTheme from './components/darkTheme'
// import { useDarkMode } from './components/useDarkMode';
// import { lightTheme } from './theme';
// import Test from './components/Test'
import AddGigCategory from './components/AddGigCategory';
import MyGigs from './components/myGigs'
import ProfilePage from './components/ProfilePage'
import Chat from './components/Chat';
// import tokenValidation from './services/tokenValidation'
import authReducer from './services/authReducers';
import NotFoundPage from './components/NotFoundPage';
const authManager = new authReducer()
// import { runInAction } from 'mobx';
// import io from 'socket.io-client'





// const defaltTheme = createMuiTheme({

//   palette: {

//     primary: {
//       main: "#73bfb8",
//       // main: "#7920A6",
//     },

//     secondary: {
//       main: "#7920A6",
//     }

//   },
// });

// const darkTheme1 = createMuiTheme({
//   palette: {
//     type: "dark",
//   },
// });

const App = inject('gigList', 'profileList', 'profile', "theme")(observer((props) => {

  const [loggedIn, setLoggedIn] = useState(authManager.isLoggedIn());

  const handleLogIn = function () {
    setLoggedIn(true)
  }

  
  useEffect(() => {

    (async () => {
      if (loggedIn) {
        // console.log("2")
        await props.gigList.getGigList();
        await props.profileList.getProfileList();
        await props.profileList.getAllUsers()
        await props.profileList.getReviewList()
      }
    })();

  }, [loggedIn]);

  return (

      <Router>
        {
          loggedIn
            ?
            (<Redirect to="/" />)
            :
            (<Redirect to="/logIn" />)
        }

        <div className="App">
          {loggedIn && <NavBar />}
          <Switch>
            <Route exact path='/' exact render={() => <Feed logedin={loggedIn} />} />
            <Route exact path="/addGig" exact render={() => <AddGigCategory />} />
            <Route exact path="/myGigs" exact render={() => <MyGigs />} />
            {/* <Route exact path="/test" exact render={() => <Test />} /> */}
            <Route exact path='/logIn' exact render={() => <LogIn handleLogIn={handleLogIn} />} />
            <Route exact path='/chat' exact render={() => <Chat />} />
            <Route exact path='/profilePage' exact render={() => <ProfilePage />} />
            <Route exact path='/signUp'  exact render={() => <SignUp logInn={handleLogIn} />} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
  );




}))

export default App;
