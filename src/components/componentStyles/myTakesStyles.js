import { makeStyles } from "@material-ui/core";


export const myTakesStyles = makeStyles({
    rootc: {
        // border: 1,
        margin: '5px',
        // display: 'grid',
    },
    leftContainer: {
        //    justifyContent: "flex"
        display: "contents"

    },
    leftContainerIcon: {
        width: '10px',
        margin: '10px',
    },
    leftContainerContent: {
        width: "auto",
        margin: '10px',
    },
    rightContainer: {
        display: "contents",
    },
    picLoc: {
        textAlign: 'center',
        marginLeft:"20px",
    },
    revv: {
        width: "auto"
    },
    iconn: {
        // main #73bfb8
        //secondary "#7920A6
        color: '#7920A6'
    },
    darkIcon: {
        color: '#73bfb8'
    },
    divider: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom:"8px",
        backgroundColor: '#7920A6',
        width: "100%",
        // height:"10px"
    },
    darkDivider: {
        marginLeft: 0,
        marginRight: 0,
        marginBottom:"8px",
        backgroundColor: '#73bfb8',
        width: "100%",
        // height:"10px"
    },
    cardContent1: { 
        "&:last-child": {
            paddingBottom: "5px"
        },
    },
    darkCardContent1: {
        "&:last-child": {
            paddingBottom: "5px"
        },
        backgroundColor: "#494545",
    },
    pic: {
        width: "60px",
        height: "60px",
        borderRadius: '50%',
    },
    leftContainerContentDark: {
        width: "auto",
        margin: '10px',
        color: "white"
    },
});