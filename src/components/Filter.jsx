import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import BuildIcon from '@material-ui/icons/Build';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
// import { Slide } from '@material-ui/core';
// import transitions from '@material-ui/core/styles/transitions';
import { inject, observer } from 'mobx-react';


const useStyles = makeStyles({
    root1: {
        // height: 216,
        // flexGrow: 1,
        maxWidth: 400,
        padding: "5px"
    },
    label:{

    },
    darkLabel:{
        color: "white",
        backgroundColor: "#242526"
    },
    darkRoot:{
        maxWidth: 400,
        padding: "5px",
    }
});


const Filter = inject("gigList", "profileList", "profile", "theme")(observer((props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState([]);
    const [selected, setSelected] = useState("");

    const handleToggle = (event, nodeIds) => {
        setExpanded(nodeIds);
    };

    const handleSelect = (event, nodeIds) => {
        if (nodeIds === "6" || nodeIds === "5") {
            console.log("shak");
        } else {
            props.handleFilter(nodeIds)

        }

        setSelected(nodeIds);
    };

    const handleExpandClick = () => {
        setExpanded((oldExpanded) =>
          oldExpanded.length === 0 ? ['2', '3', '4','5','6', '7','8'] : [],
        );
      };

    return (
        <TreeView
            className={classes.root1}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            // Transition={transitions}
            // defaultExpandIcon={<FilterListIcon />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
        >
            <div className={props.theme.theme ? classes.darkLabel : classes.label }>

            <TreeItem nodeId="5" label="Filter by..." >
                <TreeItem nodeId="location" label="Location" onLabelClick={handleExpandClick} icon= {<LocationOnOutlinedIcon/>}  />
                <TreeItem nodeId="cost" label="Cost" onLabelClick={handleExpandClick}  icon={<AttachMoneyIcon/>}/>
                <TreeItem nodeId="6" label="Category">
                    <TreeItem nodeId="cleaning" label="Cleaning" onLabelClick={handleExpandClick} icon={<FormatColorFillIcon/>}/>
                    <TreeItem nodeId="moving" label="Moving" onLabelClick={handleExpandClick} icon={<LocalShippingIcon/>} />
                    <TreeItem nodeId="handyman" label="Handy-Man" onLabelClick={handleExpandClick} icon={<BuildIcon/>} />
                    <TreeItem nodeId="gardening" label="Gardening" onLabelClick={handleExpandClick} icon={<LocalFloristIcon/>} />
                    <TreeItem nodeId="other" label="Other" onLabelClick={handleExpandClick} />
                </TreeItem>
            </TreeItem>
            </div>
        </TreeView>
    );
}));

export default Filter
