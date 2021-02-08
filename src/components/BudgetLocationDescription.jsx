import Button from '@material-ui/core/Button';
import { observer, inject } from 'mobx-react'
import { useState } from 'react';
import React from "react";
import TextField from '@material-ui/core/TextField';
import { Input, makeStyles } from '@material-ui/core';
// import PlacesAutocomplete from './PlacesAutocomplete';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Summery from './Summery';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete";


const useStyles = makeStyles((theme) => ({

    container: {
        textAlign: "center"
    },
    titles: {

    },
    darkTitles: {
        color: 'white',
    },
    rootv: {
        backgroundColor: "white"
    },
    darkRoot: {
        backgroundColor: "#18191a",
        height: '100vh'
    },
    darkBudgetInput: {
        color: '#f1f8f4',
    },
    budgetInput: {
        // border: "red"

    },
    budgetInput: {
        
        // border: "red"

    },
}));


const BudgetLocationDescription = inject("profileList", "profile", "theme")(observer((props) => {
    const [alignment, setAlignment] = useState('left');
    const [open3, setOpen3] = useState(false)
    const [budget, setbudget] = useState()
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [address, setAddress] = useState("");
    const [cord, setCord] = useState('');
    const classes = useStyles();

    const nextPage = () => {
        setOpen3(true)
    }

    const budgetSet = (e) => {
        setbudget(e.target.value)
    }
    const locationSet = (e) => {
        setLocation(e.target.value)
    }

    const descriptionSet = (e) => {
        setDescription(e.target.value)
    }

    const getLocationStr = function (str) {
        setLocation(str)
    }

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    const handleSelect = async (value) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setCord(latLng)
        setAddress(value);
    }

    if (open3 === true) {
        return (
            <div>

                <Summery category={props.category} description={description} newDate={props.newDate} duEx={props.duEx} location={address} cost={budget} coordinates={cord} />

            </div>
        )
    }

    if (open3 === false) {

        return (
            <div className={props.theme.theme ? classes.darkRoot : classes.rootv}>
                <br></br>
                <br></br>
                <br></br>
                <ArrowBackIosIcon className="backarrow" />

                <div className={classes.container}>

                    <div >
                        <div className='Bbudget'>
                            <h2 className={props.theme.theme ? classes.darkTitles : classes.titles}>Set Budget </h2>
                            <Input className={props.theme.theme ? classes.darkBudgetInput : classes.budgetInput} fullWidth value={budget} onChange={budgetSet} type="string" placeholder="Set-budget"></Input>
                        </div>

                        <div className='Llocation'>
                            <h2 className={props.theme.theme ? classes.darkTitles : classes.titles}>Where is the Gig?</h2>

                            {/* <Input fullWidth value={location} onChange={locationSet} type="string"></Input> */}
                            <PlacesAutocomplete
                                value={address}
                                onChange={setAddress}
                                onSelect={handleSelect}
                                className={props.theme.theme ? classes.darkBudgetInput : classes.budgetInput}
                            >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                        <TextField fullWidth
                                            // defaultValue={}
                                            // onChange={handleAddress}
                                            // className={props.theme.theme ? classes.darkBudgetInput : classes.budgetInput}
                                            value={address}
                                            {...getInputProps({
                                                placeholder: 'Search Places ...',
                                                className: 'bbking'
                                                // className: props.theme.theme ? classes.darkBudgetInput : classes.budgetInput,
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
                            {/* <PlacesAutocomplete location={getLocationStr} /> */}
                        </div>

                        <h2 className={props.theme.theme ? classes.darkTitles : classes.titles}>Gig Description</h2>
                        <div className='Llocation'>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                variant="outlined"
                                color="primary"
                                onChange={descriptionSet}
                                value={description}
                            />
                        </div>

                        <br></br>
                        <br></br>
                        <br></br>

                    </div>
                    <Button onClick={nextPage} variant="outlined" color="primary"  >Next</Button>

                </div>
            </div>
        )
    }


}))

export default BudgetLocationDescription;


