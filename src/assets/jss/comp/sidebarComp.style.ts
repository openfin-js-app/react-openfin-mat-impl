import { Theme, createStyles } from '@material-ui/core/styles';

import initState from '../openfin-starter-constant';

const sidebarStyle = (theme:Theme) => createStyles({
    drawerPaper:{
        border:"none",
        backgroundColor:'transparent',
        position:"fixed",
        top: initState.appbarHeight + initState.windowBorder,
        bottom:0,
        left:"0",
        zIndex: 1,
        ...initState.boxShadow,
        width:initState.drawerWidth,
        height:"100%",
    },
    background:{
        position:"absolute",
        zIndex:1,
        height: `calc(100vh - ${initState.appbarHeight}px)`,
        width: "100%",
        display:"block",
        top:"0",
        left:"0",
        backgroundSize:"cover",
        backgroundPosition:"center center",
        "&:after":{
            position:"absolute",
            zIndex:3,
            width: "100%",
            height:"100%",
            content:'""',
            display:"block",
            background:"#000",
            opacity:0.8,
        }
    },
    list:{
        marginTop:20,
        paddingLeft:"0",
        paddingTop:"0",
        paddingBottom:"0",
        marginBottom:"0",
        listStyle:"none",
    },
    item:{
        position:"relative",
        display:"block",
        textDecoration:"none",
    },
    itemLink:{
        width:"auto",
        transaction:"all 300ms linear",
        margin:"2px 15px 0",
        borderRadius:"3px",
        position:"relative",
        display:"block",
        padding:"2px 15px",
        backgroundColor:"transparent",
        ...initState.defaultFont,
    },
    itemIcon:{
        width:24,
        height:24,
        float:"left",
        marginTop:3,
        marginRight:15,
        textAlign:"center",
        verticalAlign:"middle",
        color:"rgba(255,255,255,0.8)",
    },
    itemText:{
        ...initState.defaultFont,
        margin:"0",
        lineHeight:"30px",
        fontSize:"14px",
        color:"#ffffff",
    },
    whiteFont:{
        color:"#ffffff",
    },
    releaseTypo:{
        zIndex:theme.zIndex.drawer+5,
        padding:"2% 5%",
    },
    primary:{
        backgroundColor:initState.primaryColor,
        "&:hover":{
            backgroundColor:initState.primaryColor,
        }
    },
    blue: {
        backgroundColor: initState.infoColor,
        boxShadow:
            "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)",
        "&:hover": {
            backgroundColor: initState.infoColor,
            boxShadow:
                "0 12px 20px -10px rgba(0,188,212,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(0,188,212,.2)"
        }
    },
    green: {
        backgroundColor: initState.successColor,
        boxShadow:
            "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)",
        "&:hover": {
            backgroundColor: initState.successColor,
            boxShadow:
                "0 12px 20px -10px rgba(76,175,80,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(76,175,80,.2)"
        }
    },
    orange: {
        backgroundColor: initState.warningColor,
        boxShadow:
            "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)",
        "&:hover": {
            backgroundColor: initState.warningColor,
            boxShadow:
                "0 12px 20px -10px rgba(255,152,0,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(255,152,0,.2)"
        }
    },
    red: {
        backgroundColor: initState.dangerColor,
        boxShadow:
            "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)",
        "&:hover": {
            backgroundColor: initState.dangerColor,
            boxShadow:
                "0 12px 20px -10px rgba(244,67,54,.28), 0 4px 20px 0 rgba(0,0,0,.12), 0 7px 8px -5px rgba(244,67,54,.2)"
        }
    },
    sidebarWrapper: {
        position: "relative",
        height: `calc(100vh - ${initState.appbarHeight+initState.windowBorder+30}px)`,
        overflow: "auto",
        width: initState.drawerWidth,
        zIndex: 4,
        overflowScrolling: "touch"
    },
});

export default sidebarStyle;