import { Theme, createStyles } from '@material-ui/core/styles';
import initState from "../openfin-starter-constant";

const notificationStyle = (theme:Theme)=> createStyles({

    container:{
        width: '100vw',
        height: '100vh',
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default,
        position:'relative',
        boxShadow:`inset 0 0 ${initState.windowBorder*2}px #ffffff`,
    },
    lightBoxShaddow:{
        boxShadow:`inset 0 0 ${initState.windowBorder*2}px #000000`,
    },
    closeBtn:{
        position:'absolute',
        top : theme.spacing(0.5),
        right : theme.spacing(0.5),
        zIndex:theme.zIndex.appBar+5,

    },

});

export default notificationStyle;
