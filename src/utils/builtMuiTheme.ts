import {MuiTheme} from 'react-openfin';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import initState from '../assets/jss/openfin-starter-constant';

export const buildMuiTheme = (options:ThemeOptions, theme?:MuiTheme)=>{
    return createMuiTheme({
        typography:{
            fontSize: 8,
            htmlFontSize: 10,
        },
        palette:{
            type:theme?theme:void 0,
            primary:{
                main:initState.primaryColor,
            },
            secondary:{
                main:initState.infoColor,
            },
            error:{
                main:initState.dangerColor,
            },
        },
        overrides:{
            MuiButton:{
                root:{
                    color:'white',
                },
                contained:{
                    padding:'0px 5px',
                    minWidth:'50px',
                    minHeight:'20px',
                    color:'white',
                },
                containedPrimary:{
                    color:'white',
                },
                containedSecondary:{
                    color:'white',
                },
                sizeSmall:{
                    padding:'0px 5px',
                    minWidth:'40px',
                    minHeight:'16px',
                },
                sizeLarge:{
                    padding:'0px 5px',
                    minWidth:'60px',
                    minHeight:'25px',
                },
            },
            MuiChip:{
                root:{
                    height:'20px',
                },
                avatar:{
                    width:'20px',
                    height:'20px',
                    fontSize:'0.5rem',
                },
            },
            MuiFab:{
                root:{
                    padding: '0px 0px',
                    width:'40px',
                    height:'40px',
                }
            },
            MuiIconButton:{
                root:{
                    padding: '0px 0px',
                }
            },
            MuiListItem:{
                gutters:{
                    paddingTop:'2px',
                    paddingBottom:'2px',
                }
            },
            MuiSnackbarContent:{
                root:{
                    color:'white',
                }
            },
            MuiTabs:{
                root:{
                    minHeight:'24px',
                }
            },
            MuiTab:{
                root:{
                    minHeight:'24px',
                },
            },
        },
        ...options,
    })
};

export default buildMuiTheme;