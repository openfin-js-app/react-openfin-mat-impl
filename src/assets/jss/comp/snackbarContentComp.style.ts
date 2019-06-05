import { Theme, createStyles } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

import initState from '../openfin-starter-constant';

const snackbarContent = (theme:Theme) => createStyles({
    outmostContent:{
        minWidth: 288,
        maxWidth: 568,
        borderRadius: 4,
    },
    primary:{
        backgroundColor:initState.primaryColor,
    },
    success:{
        backgroundColor:green[600],
    },
    error:{
        backgroundColor:theme.palette.error.dark,
    },
    info:{
        backgroundColor:initState.infoColor,
    },
    warning:{
        backgroundColor:amber[700],
    },
    rose:{
        backgroundColor:initState.roseColor,
    },
    icon:{
        fontSize:20,
    },
    iconVariant:{
        opacity:0.9,
        marginRight: theme.spacing(1),
    },
    message:{
        display:"flex",
        alignItems: 'center',
    },
});

export default snackbarContent;