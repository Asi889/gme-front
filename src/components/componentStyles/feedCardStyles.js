import { makeStyles } from "@material-ui/core";

export const feedCardStyles = makeStyles({
    // root: {
    //     border: 1,
    //     margin: '5px',
    //     display: 'grid',

    // },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        display: "flex",
        alignItems: "center",
        marginBottom: "7px",

    },
    icon: {

        marginTop: "10%"
    },
    pic: {
        width: "60px",
        height: "60px",
        borderRadius: '50%',

    },
    picLoc: {
        textAlign: 'center'
    },

    feedCard: {

    },
    bott: {
        display: 'flex',
        marginTop: " 10px",
        marginLeft: '5px',

    },
    pici: {
        display: 'inline-block',
        marginLeft: '20px',
        // alignContent: 'center',
    },
    infoIcon: {
        display: 'inline-block',
        marginTop: '64px',
        marginLeft: '15px',
        color: '#7920A6',
    },

    takeIt: {
        // marginRight: "150px"

    },
    // infoIcon: {
    //     textAlign: 'center'
    // },

    divider: {
        // marginLeft: 0,
        // marginRight: 0,
        width: "100%",
        backgroundColor: "#7920A6",
    },
    darkDivider:{
        width: '100%',
        // marginLeft: 0,
        // marginRight: 0,
        backgroundColor: '#73bfb8',
    },

    cardContent1: {

        "&:last-child": {
            paddingBottom: "5px"
        }
    },
    cardcontentDark: {
        "&:last-child": {
            paddingBottom: "5px"
        },
        backgroundColor: "#494545",
    },

    leftContainerIcon: {
        width: '10px',
        margin: '10px',
    },

    leftContainerContent: {
        width: "150px",
        margin: '10px',
    },
    leftContainerContentDark: {
        width: "150px",
        margin: '10px',
        color: "white"
    },

    leftContainer: {
        //    justifyContent: "flex"
        display: "contents",

    },

    bottomContainer: {

    },

    rightContainer: {
        display: "contents",
    },

    takegig: {
        textAlign: "end"
    },
    info: {
        textAlign: "start"
    },
    card: {
        margin: "5px",
    },
    iconn: {
        // main #73bfb8
        //secondary "#7920A6
        color: '#7920A6'
    },
    darkIcon: {
        color: '#73bfb8'
    },
});