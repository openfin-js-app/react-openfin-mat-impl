import { Theme, createStyles } from '@material-ui/core/styles';

import initState from '../openfin-starter-constant'

const switcherWidth = 14/34*initState.appbarHeight;
const switcherHeight = initState.appbarHeight;

const headerThemeSwitcherCompStyle = (theme:Theme)=> createStyles({

    switcher:{
        position:'relative',
        top: -initState.windowBorder/2,
        width: switcherWidth,
        height: switcherHeight,
        backgroundSize:`${switcherWidth*2}px ${switcherHeight}px`,
        backgroundImage:`url(/img/switcher.png)`,
        "-webkit-app-region":"no-drag",
    },

    active:{
        backgroundPosition:`-${switcherWidth}px 0px`
    }

});

export default headerThemeSwitcherCompStyle;
