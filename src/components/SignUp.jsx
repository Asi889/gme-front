
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
// import { Email } from '@material-ui/icons';
// import { PropTypes } from 'mobx-react';
import { useState } from 'react';
import {  Redirect } from 'react-router-dom';
// import signUpRoute from '../routes/signUpRoute'
import axios from "axios"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));

const SignUp = (props) => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [check, setCheck]= useState(false)

  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handleFirstName = (e) => {
    setFirstName(e.target.value)
    console.log(firstName)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
    console.log(lastName)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
    // console.log(password)
  }
  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value)
    // console.log(password)
  }


  const handleSubmit = async function (e) {
    e.preventDefault()
    const user = { email, firstName, lastName, password, passwordCheck }
    // console.log(u);
    // signUpRoute(u)
    console.log(user);
    //  await axios.post(`http://localhost:3001/userSignUp`, user )
     await axios.post(`${process.env.REACT_APP_SERVER_URL}/userSignUp`, user )
    //  "http://localhost:3001/userSignUp"
    //  <Redirect to='/login' />
    setCheck(true)



    // const g= await signUpRoute(u)
    // console.log(g.token);
    // localStorage.setItem('auth-token',res.data.token)
    // props.logIn()
    // logInRoute(email,password)
    // const token = await signUp(u)
    // console.log(token)
    // authManager.logIn(token)
    // console.log(authManager.isLoggedIn())
    // if (authManager.isLoggedIn()) {
    //   // props.login(true)
    // }
    // else alert("complete your login process")
  }

  return (
    <div className="App">
      {check
      ?
     <Redirect to='/login' />
     :
  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to GigMe - Sign up
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
              id="firstName"
              label="first name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={firstName}
              onChange={handleFirstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="last name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              value={lastName}
              onChange={handleLastName}
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="passwordCheck"
              label="passwordCheck"
              type="password"
              id="passwordCheck"
              // autoComplete=
              value={passwordCheck}
              onChange={handlePasswordCheck}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {/* <Link to="/logIn"> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
              >
                submit
            </Button>
            {/* </Link> */}

            
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
}
    </div>
  );
}

export default SignUp;
