import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin, MuiTheme } from 'react-openfin';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { MemoryRouter } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';

import {RouteItem} from '../../routes'
import Dashboard from './Dashboard';
import {Sidebar, Header, SnackbarContent } from '../../components';
import BusinessIcon from "@material-ui/core/SvgIcon/SvgIcon";

const muiTheme = createMuiTheme({});

declare const window:any;

let ViewOne:React.FunctionComponent<{}>;

let dashboardRoutes:RouteItem[];


describe('Dashboard layout',()=>{

    let shallow;
    let mount;

    beforeAll(() => {
        InitializeReactOpenfin({
            finUuid: process.env.REACT_APP_FIN_UUID,
            finMockupForceSilentMode:true,
            i18n:{} as any,
            hist:{} as any,
            configTabs:[],
            launchBarItems:[],
        });
    });

    beforeEach(() => {
        mount = createMount();
        shallow = createShallow();
        ViewOne = ({})=>{
            return (
                <React.Fragment>
                    dummy view one
                </React.Fragment>
            )
        }

        dashboardRoutes=[
            {
                path:'/dashboard/view-one',
                sidebarName:"viewOne.sidebar",
                navbarName:"viewOne.navbar",
                icon: BusinessIcon,
                component: ViewOne,
            },
        ];
    });

    afterEach(()=>{
        // mount.cleanUp();
    });

    it('render in normal state correctly by default',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                        <MemoryRouter initialEntries={['/dashboard/view-one']}>
                            <Dashboard
                                appLogo={''}
                                routes={dashboardRoutes}
                                location={{pathname:'/dashboard/view-one'}}
                            />
                        </MemoryRouter>
                </ThemeProvider>
            </ReactOpenfin>

        );
        expect(wrapper.find(ViewOne)).toHaveLength(1);
        expect(wrapper.find(Dashboard)).toHaveLength(1);
        wrapper.find(Header).props().handleDrawerToggle();
        wrapper.find(Header).props().onSwitchToLaunchBar();
        wrapper.find(Header).props().onMinimize();
        wrapper.find(Header).props().onMaximize();
        wrapper.find(Header).props().onClose();
        // snackbar events
        expect(wrapper.find(Snackbar)).toHaveLength(1);
        wrapper.find(Snackbar).props().onClose();
        wrapper.find(Snackbar).props().onExited();

    })

    // it('render SnackbarContent and could be closed correctly',()=>{
    //     const initialState = {
    //         application:{
    //             username:'',
    //             computerName:'',
    //             machineId:null,
    //             deviceUserId:null,
    //             loading:true,
    //             drawerOpen:true,
    //             launchBarCollapse:false,
    //             snackBarOpen:true,
    //             snackBarMsgInfo:{
    //                 variant:'primary',
    //                 message:'message',
    //             },
    //             snackBarMsgQueue:[],
    //             openfinVersion:'n/a',
    //             openfinHostSpec:{},
    //             windowsState:'normal',
    //         },
    //         client:{
    //             count:0,
    //         },
    //         config:{
    //             application:{
    //                 theme:MuiTheme.DARK,
    //             }
    //         }
    //     };
    //
    //     const store = mockStore(initialState);
    //     const wrapper = mount(
    //         <ThemeProvider theme={muiTheme}>
    //             <Provider store={store}>
    //                 <MemoryRouter initialEntries={['/dashboard/view-one']}>
    //                     <GlobalContext
    //                         config={initialState.config}
    //                     >
    //                         <Dashboard location={{pathname:'/dashboard/view-one'}}/>
    //                     </GlobalContext>
    //                 </MemoryRouter>
    //             </Provider>
    //         </ThemeProvider>
    //     );
    //     expect(wrapper.find(ViewOne)).toHaveLength(1);
    //     expect(wrapper.find(Dashboard)).toHaveLength(1);
    //     wrapper.find(Header).props().handleDrawerToggle();
    //     wrapper.find(Header).props().onSwitchToLaunchBar();
    //     wrapper.find(Header).props().onMinimize();
    //     wrapper.find(Header).props().onMaximize();
    //     wrapper.find(Header).props().onClose();
    //     // SnackbarContent events
    //     expect(wrapper.find(SnackbarContent)).toHaveLength(1);
    //     wrapper.find(SnackbarContent).props().onClose();
    //
    //     expect(store.getActions()).toMatchSnapshot();
    // })

});

