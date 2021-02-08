import React, { forwardRef, useEffect, useState } from 'react';
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

const InfoDialogMyPosts = inject("gigList", "profileList", "profile","theme")(observer((props) => {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMsg, setSnackBarMsg] = useState("")

    const [open, setOpen] = React.useState(false);
    const [indexT, setIndexT] = useState(props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate?.indexOf("T"));
    const [date, setDate] = useState(props.gig.dueDate ? props.gig.dueDate.slice(0, indexT) : props.gig.expirationDate?.slice(0, indexT));
    
    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBack = () => {
        setOpen(false);
    };

    const handleTakeGig = async () => {
       
        setOpen(false);
    };

    const useStyle = makeStyles({
        
        checkIcon: {
            right: "40%"
        },
        pos: {
            width: '76px',
            fontSize: "12px",
            fontWeight: "700",
            color: '#7920A6',
        },
        darkPos:{
            width: '76px',
            fontSize: "12px",
            fontWeight: "700",
            color:"#73bfb8",

        },
        location: {
            display: 'inline-block'
        },
    });
    const classes = useStyle();

    const snackBarClose = (event) => {
        setSnackBarOpen(false)
    }
    // console.log(props.gig)


    return (
        <div className={classes.location}  >
            {/* <CheckCircleOutlinedIcon className={classes.checkIcon} style={{ color: green[500] }}/> */}
            <Button className={props.theme.theme ? classes.darkPos : classes.pos}  onClick={handleClickOpen}>
                <InfoOutlinedIcon fontSize="small"  />


            </Button>
            {/* variant="outlined" */}
            {/* className={classes.root} */}
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
                            "Due Date: " + date : "Expiration Date: " + date}
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
                {/* {props.gigStore.description} */}
                <DialogActions>
                    <Button onClick={handleBack} color="primary">back</Button>
                    {/* <Button onClick={handleTakeGig} color="primary">Take Gig</Button> */}
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
export default InfoDialogMyPosts;