import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { IconButton, makeStyles, Snackbar } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles({
  
    checkIcon: {
        right: "40%"
    },
    pos: {
        justifyContent:"end",
        color: '#7920A6',
    },
    darkPos:{
        justifyContent:"end",
        color:"#73bfb8",

    },
    location: {
        display: 'inline-block',
    },
});

const InfoDialog = inject("gigList", "profileList", "profile","theme")(observer((props) => {

    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMsg, setSnackBarMsg] = useState("")

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBack = () => {
        setOpen(false);
    };

    const classes = useStyle();

    const snackBarClose = (event) => {
        setSnackBarOpen(false)
    }
    let ppp = props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate?.indexOf("T")
    let jjj = props.gig.dueDate ? props.gig.dueDate.slice(0, ppp) : props.gig.expirationDate?.slice(0, ppp)


    return (
        <div className={classes.location}  >
            <Button className={props.theme.theme ? classes.darkPos : classes.pos}  onClick={handleClickOpen} >
                <InfoOutlinedIcon fontSize="small"   />

            </Button>
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    <InfoOutlinedIcon color="primary" />
                    Gig Info
                    </DialogTitle>
                <DialogContent dividers>
                    <Typography>
                        Category: {props.gig.category}
                        <br></br>
                        {props.gig.dueDate ?
                            "Due Date: " + jjj : "Expiration Date: " + jjj}
                        <br></br>
                        Cost: {props.gig.cost}
                        <br></br>
                         Location: {props.gig.locationName}
                        <br></br>
                        <br></br>
                        Description:
                        <br></br>
                        {props.gig.description}


                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleBack} color="primary">back</Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={snackBarOpen}
                autoHideDuration={3000}
                onClose={snackBarClose}
                message={<span id="snackbar-msg">{snackBarMsg}</span>}
                action={
                    <IconButton
                        key="close"
                        arial-label="Close"
                        color="inherit"
                        onClick={snackBarClose}
                    >
                        x
              </IconButton>
                }
            />

        </div>
    );
}))
export default InfoDialog;