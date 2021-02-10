
import { Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {loginStyles} from './componentStyles/loginStyles'

const LogIn = (props) => {
  const useStyles1= loginStyles
  
  const classes = useStyles1();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async function (e) {
    e.preventDefault()
   

    // const res = await axios.post(`ip-172-31-20-199.us-east-2.compute.internal/logIn`, { email: email, password: password })
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/logIn`, { email: email, password: password })
    // "http://localhost:3001/logIn"
    localStorage.setItem('auth-token', res.data.token)
    props.handleLogIn()
    // history.push("/");
  }

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.icon} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzguMzA5IDM4LjMwOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzguMzA5IDM4LjMwOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjIuNTM5LDI0LjEwN2MtMS43MTIsMC4xNjMtMy41NjQtMS45MzQtNS41LTEuOTM0Yy0yLjA3MSwwLTQuMDQ4LDIuMDgzLTUuODU5LDEuODk3DQoJCQljLTQuOTU4LTAuNTA3LTguNjc0LTEuNjM5LTkuNjcxLTMuMDE0YzAuMjg0LDIuMDQ0LDAuNzk4LDMuOTc3LDEuNDg3LDUuNzY4YzAuMTc3LDAuMTc4LDAuMzUzLDAuMzUzLDAuNTM3LDAuNTM2DQoJCQljMC41MTQsMC41NjksMS4xOTIsMS4wMjMsMS44MDUsMS41OGMwLjY4OSwwLjQ2NiwxLjM2NywwLjk5NCwyLjE0LDEuNGMwLjczNiwwLjQ2OSwxLjU1OSwwLjgwMSwyLjM1OSwxLjE3NA0KCQkJYzAuODMzLDAuMjkyLDEuNjUzLDAuNjMyLDIuNTA3LDAuODEyYzAuODM3LDAuMjQ4LDEuNjksMC4zNDcsMi41MDksMC40OTZjMC44MjgsMC4wMzEsMS42MywwLjE4LDIuMzk1LDAuMTM1DQoJCQljMC4zODMtMC4wMDQsMC43NTYtMC4wMDYsMS4xMTctMC4wMWMwLjM1OS0wLjAzNywwLjcwNi0wLjA3NiwxLjAzOS0wLjExMWMwLjY3MS0wLjA1MywxLjI3My0wLjE3NiwxLjgxNC0wLjI3OA0KCQkJYzAuMjcxLTAuMDUsMC41MjMtMC4wOTksMC43NTgtMC4xNDJjMC4yMjktMC4wNjYsMC40MzgtMC4xMjcsMC42MjgtMC4xODNjMC43NjctMC4yMTIsMS4yMDYtMC4zMzMsMS4yMDYtMC4zMzMNCgkJCXMtMC40MTUsMC4xODgtMS4xNDMsMC41MThjLTAuMTg0LDAuMDgtMC4zODgsMC4xNjgtMC42MDksMC4yNjRjLTAuMjMsMC4wNzItMC40NzksMC4xNTItMC43NDUsMC4yMzYNCgkJCWMtMC41MzIsMC4xNzUtMS4xMzYsMC4zOC0xLjgyMSwwLjQ3NWMtMC4zNDEsMC4wNjItMC42OTUsMC4xMjgtMS4wNjIsMC4xOTVjLTAuMzczLDAuMDMxLTAuNzU4LDAuMDYzLTEuMTU0LDAuMDk4DQoJCQljLTAuNzk0LDAuMTA1LTEuNjM2LDAuMDI4LTIuNTA4LDAuMDE0Yy0wLjg2LTAuMTI5LTEuNzY5LTAuMTc3LTIuNjUyLTAuNDM2Yy0wLjkwMi0wLjE4LTEuNzcyLTAuNTIxLTIuNjU0LTAuODI0DQoJCQljLTAuODQxLTAuNDAyLTEuNzAyLTAuNzY2LTIuNDcyLTEuMjdjLTAuODExLTAuNDM0LTEuNDk1LTEuMDMzLTIuMTk5LTEuNTQ1Yy0wLjMyMi0wLjMwMy0wLjY0OC0wLjU5Mi0wLjk1Ny0wLjg4Mw0KCQkJYzIuODIxLDUuNzU0LDcuNjczLDkuNTY3LDEzLjIwNiw5LjU2N2M3Ljc0LDAsMTQuMTY5LTcuNDM4LDE1LjUzLTE3LjI1M0MzMS41NDgsMjIuNDY2LDI3LjY3NSwyMy42MTgsMjIuNTM5LDI0LjEwN3oiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yMi4zOTYsMjEuNTgyYzEuOTcxLTAuMzc3LDEuOTI4LTAuODIsMS45MTEtMC45ODljLTAuMDQ4LTAuNDUxLTAuNjg5LTAuNDUxLTAuOTk3LTAuNDUxDQoJCQljLTAuMzI1LDAtMC43MTIsMC4wMzEtMS4xMiwwLjA4OWMtMC4zNTMsMC4wNTEtMS41MjgsMC4yNDUtMS44MzUsMC42NjVjLTAuMDc2LDAuMTA2LTAuMTA3LDAuMjI5LTAuMDg4LDAuMzQ5DQoJCQljMC4wNzYsMC40NjEsMC43MywwLjQ2MSwwLjk3NywwLjQ2MUMyMS41NzIsMjEuNzA3LDIxLjk4MiwyMS42NjIsMjIuMzk2LDIxLjU4MnoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0xMi4xMjYsMjEuNzJjMC4yMTksMCwwLjg4MywwLDAuOTYyLTAuNDYxYzAuMDIxLTAuMTE5LTAuMDEtMC4yNDQtMC4wODYtMC4zNTENCgkJCWMtMC4yOTYtMC40MTQtMS4zODctMC42MTUtMS43MTQtMC42NjZjLTAuMzc2LTAuMDYtMC43MzUtMC4wOTEtMS4wMzktMC4wOTFjLTAuMjc0LDAtMC45MTgsMC0wLjk3OSwwLjQ1Mw0KCQkJYy0wLjA1NywwLjQyNSwwLjU0NywwLjc2MSwxLjc5MiwxLjAwMkMxMS40NDYsMjEuNjgxLDExLjgxNCwyMS43MiwxMi4xMjYsMjEuNzJ6Ii8+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMzcuMDY3LDYuNTM4YzAsMC0wLjEwNi0wLjIzOC0wLjM2OS0wLjU5NmMtMC4xMy0wLjE4Mi0wLjMwMS0wLjM5LTAuNTEzLTAuNjINCgkJCWMtMC4yMDgtMC4yNDEtMC40NzEtMC40NjYtMC43ODQtMC42NTRjLTAuMzEtMC4yMDItMC42NjEtMC40MDMtMS4wNDUtMC41OTJjLTAuMzgyLTAuMTk4LTAuODE3LTAuMjY5LTEuMjY3LTAuMzY0DQoJCQljLTAuMTQxLTAuMDIxLTAuMjg1LTAuMDMyLTAuNDMtMC4wNDZjMC4zMjItMC4xMjQsMC42MzUtMC4yNDUsMC45MjItMC4zODZjMC4zMDktMC4xMzIsMC41OTgtMC4yNjQsMC44NTctMC4zOTUNCgkJCWMwLjI1OS0wLjE0MywwLjQ5Mi0wLjIzOCwwLjY4Ni0wLjM1YzAuMzg5LTAuMjA5LDAuNjIxLTAuMzc5LDAuNjIxLTAuMzc5bDAuMDA4LTAuMDA1YzAuMDE1LTAuMDExLDAuMDI4LTAuMDI1LDAuMDM5LTAuMDQyDQoJCQljMC4wNTEtMC4wNzYsMC4wMy0wLjE3OS0wLjA0Ny0wLjIyOWMwLDAtMC4yMzEtMC4xNTQtMC42NTgtMC4zMzVjLTAuMjEzLTAuMDg5LTAuNDc2LTAuMjAxLTAuNzgtMC4yNw0KCQkJYy0wLjMwNC0wLjA2OS0wLjY1NC0wLjE0Ny0xLjAzNi0wLjE5MmMtMC4zODEtMC4wMjYtMC43OTktMC4wNDQtMS4yMzctMC4wMTRjLTAuNDM1LDAuMDQ4LTAuODk5LDAuMS0xLjM1NCwwLjI1Nw0KCQkJYy0wLjQ1NiwwLjE1My0wLjkwOSwwLjM2Ni0xLjM0MiwwLjY0Yy0wLjQ0MywwLjI0My0wLjg2MSwwLjU2MS0xLjI5MSwwLjgyOGMtMC4wNzgsMC4wNTgtMC4xNTUsMC4xMTYtMC4yMzMsMC4xNzMNCgkJCWMwLjM3NSwwLjMzNywwLjczMywwLjY5NSwxLjA4MSwxLjA2OWMwLjE3NCwwLjE5MiwwLjM0NSwwLjM4OCwwLjUxNCwwLjU4OGMwLjM4MywwLjQ1MiwwLjc0LDAuOTI4LDEuMDc4LDEuNDIzDQoJCQljMC4zMzYsMC4wNjIsMC42NzIsMC4xMzEsMC45OTQsMC4yMDZjMC4zOTEsMC4wNywwLjc1MiwwLjIxOCwxLjExMSwwLjI5NGMwLjM1NiwwLjA3NywwLjcyNiwwLjA2OSwxLjA1OSwwLjExNw0KCQkJYzAuMzMyLDAuMDUxLDAuNjU5LDAuMDc2LDAuOTc1LDAuMDgyYzAuMTU3LDAuMDA3LDAuMzE0LDAuMDAxLDAuNDY1LTAuMDA0YzAuMTQ1LDAuMDA5LDAuMjcyLDAuMDQsMC40MDgsMC4wNDENCgkJCWMwLjI2MiwwLjAxOCwwLjUwNiwwLjAyNywwLjcxNywwLjAyM2MwLjQyLTAuMDAyLDAuNzAzLTAuMDM2LDAuNzAzLTAuMDM2bDAuMDItMC4wMDJjMC4wMTYtMC4wMDIsMC4wMzEtMC4wMDYsMC4wNDctMC4wMTMNCgkJCUMzNy4wNjcsNi43MTgsMzcuMTA0LDYuNjIxLDM3LjA2Nyw2LjUzOHoiLz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0yOS4zOCw3LjU3NWMtMC43MzYtMC40NjktMS41Ni0wLjgwMS0yLjM1OS0xLjE3NGMtMC44MzMtMC4yOTItMS42NTMtMC42MzItMi41MDgtMC44MTENCgkJCWMtMC44MzYtMC4yNDgtMS42ODktMC4zNDctMi41MDgtMC40OTdjLTAuODI4LTAuMDMxLTEuNjMxLTAuMTc5LTIuMzk2LTAuMTM0Yy0wLjM4MywwLjAwMy0wLjc1NiwwLjAwNi0xLjExNywwLjAwOQ0KCQkJYy0wLjM1OCwwLjAzOC0wLjcwNiwwLjA3Ni0xLjAzOSwwLjExMWMtMC42NzEsMC4wNTMtMS4yNzQsMC4xNzctMS44MTQsMC4yNzljLTAuMjcxLDAuMDUtMC41MjQsMC4wOTgtMC43NTgsMC4xNDENCgkJCWMtMC4yMjgsMC4wNjctMC40MzgsMC4xMjgtMC42MjgsMC4xODNjLTAuNzY3LDAuMjEyLTEuMjA2LDAuMzMzLTEuMjA2LDAuMzMzczAuNDE1LTAuMTg4LDEuMTQyLTAuNTE3DQoJCQljMC4xODQtMC4wNzksMC4zODgtMC4xNjcsMC42MS0wLjI2M2MwLjIzLTAuMDczLDAuNDc5LTAuMTUzLDAuNzQ1LTAuMjM3YzAuNTMyLTAuMTc0LDEuMTM1LTAuMzc5LDEuODIxLTAuNDc0DQoJCQljMC4zNDEtMC4wNjMsMC42OTYtMC4xMjgsMS4wNjMtMC4xOTVjMC4zNzMtMC4wMzIsMC43NTgtMC4wNjQsMS4xNTQtMC4wOThjMC43OTMtMC4xMDUsMS42MzUtMC4wMjgsMi41MDgtMC4wMTMNCgkJCWMwLjg1OSwwLjEyOCwxLjc2OSwwLjE3NiwyLjY1MSwwLjQzNWMwLjkwMiwwLjE4LDEuNzcyLDAuNTIyLDIuNjU0LDAuODI0YzAuNTU1LDAuMjY2LDEuMTA4LDAuNTMsMS42NDksMC44MTMNCgkJCWMtMC4xODctMC4yNDgtMC4zNjItMC41MDctMC41NjItMC43NDNjLTAuMTY5LTAuMi0wLjMzOS0wLjM5Ni0wLjUxNi0wLjU4NmMtMC4zNDYtMC4zNzQtMC43MDUtMC43MzEtMS4wODItMS4wNjkNCgkJCUMyNC4xODIsMS40NjIsMjAuNzYzLDAsMTcuMDM1LDBDOC4zMDUsMCwxLjIyOCw3Ljk2OSwxLjIyOCwxNy44YzAsMC43NTEsMC4wNTUsMS40ODYsMC4xMzUsMi4yMTMNCgkJCWMwLjk3My0xLjY4Myw3LjYxMi0yLjk4NSwxNS42NzUtMi45ODVzMTQuNzAzLDEuMzAyLDE1LjY3MiwyLjk4M2MwLjA4LTAuNzI3LDAuMTM1LTEuNDYyLDAuMTM1LTIuMjEzDQoJCQljMC0zLjU2NC0wLjk0MS02Ljg3NS0yLjU0NS05LjY1NkMzMC4wMDQsNy45NDMsMjkuNzA1LDcuNzQ1LDI5LjM4LDcuNTc1eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"/>
         
          <Typography component="h1" variant="h5">
            Welcome to GigMe 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmail}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePassword}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign in
            </Button>

            <Link to='/signUp'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                CREATE ACCOUNT
            </Button>
            </Link>


          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default LogIn;
