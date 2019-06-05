import { Theme, createStyles } from '@material-ui/core/styles';

import initState from '../openfin-starter-constant';

const appStyle:any = (theme:Theme) => createStyles({
    wrapper:{
        position:"relative",
        top:"0",
        height: "100vh",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
    },
    wrapperPrimary:{
        borderTop: `${initState.windowBorder}px solid ${initState.primaryColor}`,
    },
    wrapperInfo:{
        borderTop: `${initState.windowBorder}px solid ${initState.infoColor}`,
    },
    wrapperWarning:{
        borderTop: `${initState.windowBorder}px solid ${initState.warningColor}`,
    },
    wrapperDanger:{
        borderTop: `${initState.windowBorder}px solid ${initState.dangerColor}`,
    },
    wrapperSuccess:{
        borderTop: `${initState.windowBorder}px solid ${initState.successColor}`,
    },

    mainPanel:{
        overflow:'auto',
        position:"relative",
        float:"right",
        height:"100%",
        width:`calc(100% - ${initState.drawerWidth}px)`,
        overflowScrolling:'touch',
    },
    mainPanelShift:{
        width:`calc(100%)`,
        transition:theme.transitions.create('width',{
            easing:theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    content:{
        position:'relative',
        marginTop:"0px",
        padding:`0px ${initState.windowBorder}px`,
        height:"100%",
        overflowX:'hidden',
        boxShadow:`inset 0 0 ${initState.windowBorder}px #ffffff`,
    },
    lightBoxShaddow:{
        boxShadow:`inset 0 0 ${initState.windowBorder}px #000000`,
    },
    container:{
        position:'absolute',
        top:initState.appbarHeight,
        left:"0px",
        right:"0px",
        bottom:"0px",
    },
    snackbarCloseBtn:{
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
});

export default appStyle;