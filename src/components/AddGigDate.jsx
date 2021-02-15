import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import TextField from '@material-ui/core/TextField';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import BudgetLocationDescription from './BudgetLocationDescription';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({

  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '15%',
    marginLeft: '25%',

  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '60%',
  },

  toggle: {
    thumbOnColor: 'yellow',
    trackOnColor: 'red'
  },
  

  center: {
    textAlign: "center"
  },

  root1: {


  },
  darkRoot: {
      backgroundColor: "#18191a"
  },
  title:{

  },
  darkTitle:{
      color: "#e3dcdc",
  },

  due:{

  },
  expire:{

  },
  togButtonGroup:{
    
  },
  darkTogButtonGroup:{
    backgroundColor: "cadetblue",
  },

  nextB:{

  },
  darkNextB:{
backgroundColor:"#8a8383",
  }
  

  

}));

// location /api/ {
//   proxy_set_header X-Forwarded-For $remote_addr;
//   proxy_set_header Host $http_host;
// proxy_pass http://localhost:3001;
// }

const AddGigDate = inject("profileList", "profile","theme")(observer((props) => {

  const [alignment, setAlignment] = useState('dueDate');
  const [open, setOpen] = useState(false)
  const [newGigDate, setNewGigDate] = useState('')

  const handleChange = function (e) {
    setNewGigDate(e.target.value)
  }

  const nextPage = () => {
    setOpen(true)
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();
  if (open === true) {
    return (
      <div>
        <BudgetLocationDescription category={props.category} newDate={newGigDate} duEx={alignment} />

      </div>
    )
  }

  if (open === false) {
    return (
      <div className={props.theme.theme ? classes.darkRoot : classes.root1}>
        <br></br>
        <br></br>
        <ArrowBackIosIcon className="backarrow" />
        <br></br>
        <br></br>
        <div className={classes.center}>

          <h2 className={props.theme.theme ? classes.darkTitle : classes.title }>Select Date</h2>
          <div className='toggleButtonDate'>

          </div>

          <div className="toggleB">
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              className={props.theme.theme ? classes.darkTogButtonGroup : classes.togButtonGroup}

            >
              <ToggleButton className={classes.due} value="dueDate" aria-label="left aligned">
                Due Date
        </ToggleButton>

              <ToggleButton className={classes.expire} value="experationDate" aria-label="right aligned">
                Expiration Date
        </ToggleButton>

            </ToggleButtonGroup>

          </div>

          <span className='calandarContainer'>

            <form className={classes.container} noValidate>
              {/* <input
               id="date"
               label="Schedule"
               type="date"
               // className={classes.textField}
               InputLabelProps={{
                 shrink: true,

               }}
               onChange={handleChange}
               name="dueDate"
               value={newGigDate}
              /> */}
              
              <TextField
              // styles={{color: "white"}}
                id="date"
                label="Schedule"
                type="date"
                // className={classes.textField}
                InputLabelProps={{
                  shrink: true,

                }}
                onChange={handleChange}
                name="dueDate"
                value={newGigDate}

              />

            </form>
          </span>


          <br></br>
          <br></br>
          <Button className={props.theme.theme ? classes.darkNextB : classes.nextB} variant="outlined"  onClick={nextPage} >Next</Button>
        </div>
      </div>
    )
  }



}))

export default AddGigDate;


