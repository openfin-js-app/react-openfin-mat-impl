import { Theme, createStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';

import initState from '../openfin-starter-constant';

const headerLinkStyle = (theme:Theme) => createStyles({
    menuBtn:{
        width:initState.appbarHeight * 0.9,
        height:initState.appbarHeight * 0.9,
        minHeight:initState.appbarHeight * 0.9,
        marginRight: initState.appbarHeight * 0.5,
        "-webkit-app-region":"no-drag",
        "& span svg":{
            width:initState.appbarHeight * 0.8,
            height:initState.appbarHeight * 0.8,
        }
    },
    info:{
        backgroundColor: initState.infoColor,
        color: '#ffffff',
        borderRadius:"4px",
        "&:hover,&:focus":{
            background:initState.infoColor,
            border:`1px solid ${lighten(initState.infoColor,0.5)}`
        },
    },
    success:{
        backgroundColor: initState.successColor,
        color: '#ffffff',
        borderRadius:"4px",
        "&:hover,&:focus":{
            background:initState.successColor,
            border:`1px solid ${lighten(initState.successColor,0.5)}`
        },
    },
    warning:{
        backgroundColor: initState.warningColor,
        color: '#ffffff',
        borderRadius:"4px",
        "&:hover,&:focus":{
            background:initState.warningColor,
            border:`1px solid ${lighten(initState.warningColor,0.5)}`
        },
    },
    rose:{
        backgroundColor: initState.roseColor,
        color: '#ffffff',
        borderRadius:"4px",
        "&:hover,&:focus":{
            background:initState.roseColor,
            border:`1px solid ${lighten(initState.roseColor,0.5)}`
        },
    },
    danger:{
        backgroundColor: initState.dangerColor,
        color: '#ffffff',
        borderRadius:"4px",
        "&:hover,&:focus":{
            background:initState.dangerColor,
            border:`1px solid ${lighten(initState.dangerColor,0.5)}`
        },
    },
});

export default headerLinkStyle;