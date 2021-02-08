import React, { forwardRef, useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { IconButton, makeStyles, Snackbar, Input, TextField } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EditIcon from '@material-ui/icons/Edit';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";
import { AddRounded } from '@material-ui/icons';
import { action } from 'mobx';



// const Transition = forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

const useStyle = makeStyles({
    // root: {

    //     borderRadius: 10,
    //     border: 0,
    //     color: '#02cab1',

    //     boxShadow: '0 1px 1px 1px rgba(83, 83, 83, 0.3)',
    //     left: "170px",
    //     top: "13px",
    //     fontSize: "10px",
    //     fontWeight: "700"
    // },
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
    dialogContent: {
        textAlign: "end",
    },
    editt: {
        textAlign: "justify",
        padding: "5px",
        // color: "primary",
    },
    editText1: {
        padding: "15px",
    },
    editText2: {
        padding: "10px",
        // display:"inline-box"

    },
    editText3: {
        padding: "10px",
        // display:"inline-box"

    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '15%',
        marginLeft: '25%',

    },
    address: {

    }

});

const EditDialogMyPosts = inject("gigList", "profileList", "profile","theme")(observer((props) => {
    // let ppp = props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate.indexOf("T");
    // let jjj = props.gig.dueDate ? props.gig.dueDate.slice(0, ppp) : props.gig.expirationDate.slice(0, ppp);
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");
    const [category, setCategory] = useState(props.gig.category);
    const [location, setLocation] = useState(props.gig.locationName);
    const [cost, setCost] = useState(props.gig.cost);
    const [indexT, setIndexT] = useState(props.gig.dueDate ? props.gig.dueDate.indexOf("T") : props.gig.expirationDate?.indexOf("T"));
    const [date, setDate] = useState(props.gig.dueDate ? props.gig.dueDate.slice(0, indexT) : props.gig.expirationDate?.slice(0, indexT));
    const [open, setOpen] = useState(false);
    const time = props.gig.dueDate ? "dueDate" : "experationDate";
    const [alignment, setAlignment] = useState(time);
    const [description, setDescription] = useState(props.gig.description);
    const [address, setAddress] = useState("");
    const [cord, setCord] = useState("");


    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBack = () => {
        setOpen(false);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value)
    };

    const handleLocation = (e) => {
        setLocation(e.target.value)
    };

    const handleCost = (e) => {
        setCost(e.target.value)
    };

    const handleDate = function (e) {
        setDate(e.target.value)
    };

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handelDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleAdddress = (e) => {
        setAddress(e.target.value)
    }

    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setCord(latLng)
        setLocation(value);
    }
    const handleUpdate = async () => {
        const gigId = props.gig.id;
        let status1 = props.gig.status

        if (props.gig.dueDate) {
            await props.gigList.updateGig(category, description, props.gig.created, date, null, location, cord, status1, parseInt(cost), gigId);
            setTimeout(() => {
                setSnackBarMsg(`Gig updated!`)
                setSnackBarOpen(true)
            }, 1)
        }

        if (props.gig.expirationDate) {
            await props.gigList.updateGig(category, description, props.gig.created, null, date, location, cord, status1, parseInt(cost), gigId);
            setTimeout(() => {
                setSnackBarMsg(`Gig updated!`)
                setSnackBarOpen(true)
            }, 1)
        }
        setOpen(false);
    };

    const classes = useStyle();

    const snackBarClose = (event) => {
        setSnackBarOpen(false)
    }


    return (
        <div className={classes.location}  >
            <Button className={props.theme.theme ? classes.darkPos : classes.pos}  onClick={handleClickOpen}>
                <EditIcon fontSize="small"  />


            </Button>
            
            <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className={classes.dialogContent}
            >
                <DialogTitle >
                    <InfoOutlinedIcon color="primary" />
                    Edit Gig Info
                    </DialogTitle>
                <DialogContent >

                    <div className={classes.editt}>

                        <TextField
                            label="Category"
                            value={category}
                            color='primary'
                            type="string"
                            variant="outlined"
                            className={classes.editText1}
                            onChange={handleCategory}

                        />
                        <PlacesAutocomplete
                            value={location}
                            onChange={setLocation}
                            onSelect={handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div>
                                    <TextField
                                        variant="outlined"
                                        value={location}
                                        // className={classes.editText1}

                                        fullWidth
                                        {...getInputProps({
                                            // value: props.gig.locationName,
                                            // value

                                            // placeholder: {address},
                                            // label: 'Location',
                                            className: classes.editText1,
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                            const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                            // inline style for demonstration purpose
                                            const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style,
                                                    })}
                                                >
                                                    <span>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>

                        {/* <TextField
                            label="Location"
                            value={location}
                            variant="outlined"
                            type="string"
                            className={classes.editText1}
                            onChange={handleLocation}

                        /> */}
                        <TextField
                            label="Cost"
                            value={cost}
                            type="number"
                            variant="outlined"
                            className={classes.editText1}
                            onChange={handleCost}

                        />




                        <form >
                            <TextField
                                // id="date"
                                label="Schedule"
                                type="date"
                                variant="outlined"
                                value={date}

                                // value={props.gig.dueDate?props.gig.dueDate:props.gig.expirationDate}
                                // defaultValue={props.gig.dueDate ? props.gig.dueDate : props.gig.expirationDate}
                                className={classes.editText1}
                                InputLabelProps={{
                                    shrink: true,

                                }}
                                onChange={handleDate}
                                name="dueDate"


                            />

                        </form>
                        <ToggleButtonGroup
                            value={alignment}
                            exclusive
                            onChange={handleAlignment}
                            aria-label="text alignment"
                            className={classes.editText2}

                        >
                            <ToggleButton size="small" value="dueDate" aria-label="left aligned">
                                Due Date
                                    </ToggleButton>

                            <ToggleButton size="small" value="experationDate" aria-label="right aligned">
                                Expiration Date
                                     </ToggleButton>

                        </ToggleButtonGroup>



                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            value={description}
                            multiline
                            rows={4}
                            variant="outlined"
                            color="primary"
                            className={classes.editText1}
                            onChange={handelDescription}

                        />


                    </div>


                </DialogContent>
                {/* {props.gigStore.description} */}
                <DialogActions>
                    <Button onClick={handleBack} color="primary">back</Button>
                    <Button onClick={action(handleUpdate)} color="primary">Update</Button>
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
export default EditDialogMyPosts;