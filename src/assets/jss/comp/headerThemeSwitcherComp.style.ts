import { Theme, createStyles } from '@material-ui/core/styles';

import {default as reactOpenfinInitState} from 'react-openfin/init';

import initState from '../openfin-starter-constant'

const switcherWidth = 14/34*initState.appbarHeight;
const switcherHeight = initState.appbarHeight;

const headerThemeSwitcherCompStyle = (theme:Theme)=> createStyles({

    switcher:{
        width: switcherWidth,
        height: switcherHeight,
        backgroundSize:`${switcherWidth*2}px ${switcherHeight}px`,
        backgroundImage:`url(${reactOpenfinInitState.config.publicUrl}/img/switcher.png)`,
        "-webkit-app-region":"no-drag",
    },

    active:{
        backgroundPosition:`-${switcherWidth}px 0px`
    }

});

export default headerThemeSwitcherCompStyle;
