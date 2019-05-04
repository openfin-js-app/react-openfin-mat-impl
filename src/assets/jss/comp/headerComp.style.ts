import { Theme, createStyles } from '@material-ui/core/styles';

import initState from '../openfin-starter-constant';

const headerStyle = (theme:Theme) =>createStyles({
    appBar:{
        backgroundColor:"transparent",
        boxShadow:"none",
        borderBottom: "0",
        margin:`${initState.windowBorder}px 0px 0px 0px`,
        position:"absolute",
        width:'100%',
        paddingTop:0,
        zIndex:theme.zIndex.appBar+5,
        color:"#555555",
        border:"0",
        borderRadius:"0px",
        padding:"0 0",
        transition:"all 150ms ease 0s",
        minHeight:initState.appbarHeight,
        display:"block",
        "-webkit-user-select":"none",
        "-webkit-app-region":"drag",
    },
    container:{
        ...initState.container,
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
    },
    preFlex:{
        display:'flex',
        flexWrap:'nowrap',
        top: -initState.windowBorder/2,
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
    },
    flex:{
        flex:1,
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
    },
    postFlex:{
        display:'flex',
        flexWrap:'nowrap',
        alignItems:'baseline',
        position:'relative',
        top: -initState.windowBorder/2,
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
        maxHeight:initState.appbarHeight,
    },
    menuBtn:{
        position:'relative',
        top: -initState.windowBorder/2,
        marginLeft:initState.appbarHeight * 0.4,
        backgroundColor:"transparent",
        "-webkit-app-region":"no-drag",
        color:"inherit",
        width:initState.appbarHeight,
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
        boxShadow:"none",
        "&:hover,&:focus":{
            background:"transparent",
        },
        "& span svg":{
            width:initState.appbarHeight,
            height:initState.appbarHeight,
        }
    },
    companyLogImg:{
        height: initState.appbarHeight * 0.8,
        marginLeft:initState.appbarHeight * 0.4,
        "-webkit-app-region":"no-drag",
    },
    title:{
        ...initState.defaultFont,
        fontSize:"14px",
        borderRadius:"3px",
        textTransform:"none",
        color:"inherit",
        height:initState.appbarHeight,
        minHeight:initState.appbarHeight,
        marginLeft:initState.appbarHeight * 0.2,
        "&:hover,&:focus":{
            background:"transparent",
        }
    },
    primary:{
        backgroundColor:initState.primaryColor,
        borderLeft: `${initState.windowBorder}px solid ${initState.primaryColor}`,
        borderRight: `${initState.windowBorder}px solid ${initState.primaryColor}`,
        color:"#ffffff",
    },
    info:{
        backgroundColor:initState.infoColor,
        borderLeft: `${initState.windowBorder}px solid ${initState.infoColor}`,
        borderRight: `${initState.windowBorder}px solid ${initState.infoColor}`,
        color:"#ffffff",
    },
    success:{
        backgroundColor:initState.successColor,
        borderLeft: `${initState.windowBorder}px solid ${initState.successColor}`,
        borderRight: `${initState.windowBorder}px solid ${initState.successColor}`,
        color:"#ffffff",
    },
    warning:{
        backgroundColor:initState.warningColor,
        borderLeft: `${initState.windowBorder}px solid ${initState.warningColor}`,
        borderRight: `${initState.windowBorder}px solid ${initState.warningColor}`,
        color:"#ffffff",
    },
    danger:{
        backgroundColor:initState.dangerColor,
        borderLeft: `${initState.windowBorder}px solid ${initState.dangerColor}`,
        borderRight: `${initState.windowBorder}px solid ${initState.dangerColor}`,
        color:"#ffffff",
    },
});

export default headerStyle;