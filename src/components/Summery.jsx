import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react'
import { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from "react";
import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventIcon from '@material-ui/icons/Event';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { useHistory } from 'react-router-dom';
import { action } from 'mobx';


const useStyles = makeStyles((theme) => ({
    // root: {
    //     width: '80%',
    //     margin: 'auto',
    //     textAlign: 'left',
    //     padding: '20px 6px',
    //     boxShadow: 'red',
    // },
    root1: {
        // textAlign: 'center',
        textAlign: 'center'
    },
    rootv: {
        backgroundColor: "white"
    },
    darkRoot: {
        backgroundColor: "#18191a",
        height: '100vh'
    },
    title: {
        textAlign: 'center'
    },
    darkTitle: {
        textAlign: 'center',
        color: "#e3dcdc",
    },
    paper: {
        width: '80%',
    },
    darkPaper: {
        backgroundColor: "#4b4a4a",
        width: '80%',
        margin: 'auto',
        // boxShadow: 'red'
    },
    iconn: {
        // main #73bfb8
        //secondary "#7920A6
        color: '#7920A6'
    },
    darkIcon: {
        color: '#73bfb8'
    },

    text: {

    },
    darkText: {
        color: '#ebebeb',
    },
    //className={props.theme.theme ? classes.darkRoot : classes.root1}
}));

const Summery = inject("gigList", "profileList", "profile", "theme")(observer((props) => {
    console.log(props.coordinates);

    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [back, setBack] = useState(false)
    const classes = useStyles();
    const history = useHistory();


    const addG = async () => {
        let created
        if (props.duEx === 'experationDate') {
            await props.gigList.addNewGig(props.category, props.description, created, null, props.newDate, props.location, props.coordinates, parseInt(props.cost))
        }

        if (props.duEx === 'dueDate') {
            await props.gigList.addNewGig(props.category, props.description, created, props.newDate, null, props.location, props.coordinates, parseInt(props.cost))
        }
        // alert ("new gig added")
        history.push('/')
    }

    return (
        <div className={props.theme.theme ? classes.darkRoot : classes.rootv}>
            <br></br>
            <br></br>

            <ArrowBackIosIcon />
            <h2 className={props.theme.theme ? classes.darkTitle : classes.title} >Summery</h2>
            <div className="summry">

                <Paper className={props.theme.theme ? classes.darkPaper : classes.paper} elevation={3} >

                    <Divider variant="middle" />
                    <br></br>
                    <Typography className={props.theme.theme ? classes.darkText : classes.text} variant="h6" >
                        <CategoryOutlinedIcon className={props.theme.theme ? classes.darkIcon : classes.iconn} /> <b>Category: </b>
                        {props.category}
                    </Typography>
                    <br></br>
                    <Typography className={props.theme.theme ? classes.darkText : classes.text} variant="h6" >
                        <EventIcon className={props.theme.theme ? classes.darkIcon : classes.iconn} /> <b>Time:</b> {props.newDate}
                    </Typography>
                    <br></br>

                    <Typography className={props.theme.theme ? classes.darkText : classes.text} variant="h6">
                        <LocationOnOutlinedIcon className={props.theme.theme ? classes.darkIcon : classes.iconn} /> <b> Location: </b>
                        <br></br>
                        {props.location}
                    </Typography>
                    <br></br>

                    <Typography className={props.theme.theme ? classes.darkText : classes.text} variant="h6">
                        <AttachMoneyIcon className={props.theme.theme ? classes.darkIcon : classes.iconn} /> <b>Cost:</b>  {props.cost}
                    </Typography>
                    <br></br>

                    <Typography className={props.theme.theme ? classes.darkText : classes.text} variant="h6">

                        <DescriptionOutlinedIcon className={props.theme.theme ? classes.darkIcon : classes.iconn} /> <b>Description:</b>
                        <br></br>
                        {props.description}
                    </Typography>
                </Paper>

                <br></br>
                <Link to="/">
                    <div className={classes.root1}>
                        <Button onClick={action(addG)} variant="contained"  >CONFIRM AND POST</Button>
                    </div>
                </Link>
            </div>

        </div >
    )



}))

export default Summery;


