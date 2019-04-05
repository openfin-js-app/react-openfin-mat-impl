import { Theme, createStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

import initState from '../openfin-starter-constant';

const launchBtnHeight = 64;
const launchBtnContainerMaxWidth = 576;

const launchBarStyle:any = (theme:Theme) => createStyles({
    toolBar:{
        height:64,
        padding:'0 0',
    },
    appLogoImg:{
        width:40,
        height:40,
        margin:12,
        "-webkit-user-select":"none",
        "-webkit-app-region":"drag",
    },
    undockCtrlBtn:{
        position:'absolute',
        top:2,
        left: launchBtnHeight-18,
    },
    buttonContainer:{
        maxWidth:`${launchBtnContainerMaxWidth}px`,
        whiteSpace:'nowrap',
        height:`${launchBtnHeight}px`,
        background: darken(initState.primaryColor, 0.2),
    },
    buttonContainerCollapse:{
        width:'0px !important',
    },
    baseButton:{
        color:'white',
        borderRadius:'0%',
        height:launchBtnHeight,
        width:launchBtnHeight,
        "&:hover":{
            background: darken(initState.primaryColor, 0.4),
        },
        '& $svg':{
            fontSize:'50px',
        },
    },
    svgButton:{
        borderRadius:'0%',
        height:launchBtnHeight,
        width:launchBtnHeight,
        "&:hover":{
            background: darken(initState.primaryColor, 0.4),
        },
        '& $img':{
            height:36,
            width:36,
        },
    },
    controlPanelContainer:{
        margin:'0 4px',
        display:'flex',
        flexDirection:'column',
    },
    controlBtn:{
        width:16,
        height:16,
        minHeight:16,
        borderRadius:4,
        '& $svg':{
            width:16,
            height:16,
        }
    },
    controlBtnPrimary:{
        color: '#ffffff',
        backgroundColor: initState.primaryColor,
        "&:hover,&:focus":{
            background:initState.primaryColor,
            border:`1px solid ${lighten(initState.primaryColor,0.5)}`
        },
    },
    controlBtnWarning:{
        color: '#ffffff',
        backgroundColor: initState.warningColor,
        "&:hover,&:focus":{
            background:initState.warningColor,
            border:`1px solid ${lighten(initState.warningColor,0.5)}`
        },
    },
    controlBtnSuccess:{
        color: '#ffffff',
        backgroundColor: initState.successColor,
        "&:hover,&:focus":{
            background:initState.successColor,
            border:`1px solid ${lighten(initState.successColor,0.5)}`
        },
    },
    controlBtnInfo:{
        color: '#ffffff',
        backgroundColor: initState.infoColor,
        "&:hover,&:focus":{
            background:initState.infoColor,
            border:`1px solid ${lighten(initState.infoColor,0.5)}`
        },
    },
    controlBtnRose:{
        color: '#ffffff',
        backgroundColor: initState.roseColor,
        "&:hover,&:focus":{
            background:initState.roseColor,
            border:`1px solid ${lighten(initState.roseColor,0.5)}`
        },
    },
    controlBtnGrey:{
        color: '#ffffff',
        backgroundColor: initState.greyColor,
        "&:hover,&:focus":{
            background:initState.greyColor,
            border:`1px solid ${lighten(initState.greyColor,0.5)}`
        },
    },
    controlBtnDanger:{
        color: '#ffffff',
        backgroundColor: initState.dangerColor,
        "&:hover,&:focus":{
            background:initState.dangerColor,
            border:`1px solid ${lighten(initState.dangerColor,0.5)}`
        },
    },
});

export default launchBarStyle;