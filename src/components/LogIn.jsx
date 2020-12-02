
import { Avatar, Box, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory } from "react-router-dom";

// import { authReducer } from '../reducers/authReducers';
// import { signUp } from '../services/signup'
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

const LogIn = () => {

  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(process.env)
    console.log(process.env.REACT_APP_SERVER_URL)
  }
  
  
  const handlePassword = (e) => {
    setPassword(e.target.value)
    // console.log(password)
  }
  const history = useHistory();

  const handleSubmit = async function (e) {
    e.preventDefault()
    // const token = await signUp(u)

    console.log(process.env.REACT_APP_SERVER_URL);
    const res= await axios.post(`${process.env.REACT_APP_SERVER_URL}/logIn`, {email: email, password: password} )
    // "http://localhost:3001/logIn"
    console.log(res);    
    // console.log(process.env.SERVER_URL);
    console.log("shack");
    
    localStorage.setItem('auth-token', res.data.token)
     
    history.push("/");






  }
  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to GigMe - Log in
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
            {/* <TextField
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
            /> */}
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}

            {/* <Link to="/"> */}
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
            {/* </Link> */}

            <Link to='/signUp'>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              // onClick={handleSubmit}
              >
                CREATE ACCOUNT
            </Button>
            </Link>

            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                {/* <Link href="/login" variant="body2">
                  {"Have an account? Sign In"}
                </Link> */}
              </Grid>
            </Grid>
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
