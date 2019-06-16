import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import BusinessIcon from '@material-ui/icons/Business';
import { MemoryRouter } from 'react-router';

import {RouteItem} from '../../routes'

import ChildWindow from './ChildWindow';
import {Header, SnackbarContent} from '../../components';
import Snackbar from "@material-ui/core/Snackbar";

const muiTheme = createMuiTheme({});

declare const window:any;

const ViewOne:React.FunctionComponent<{}> = ({})=>{
    return (
        <React.Fragment>
            dummy view one
        </React.Fragment>
    )
}

const childRoutes:RouteItem[]=[
    {
        path:'/childWindow/view-one',
        sidebarName:"viewOne.sidebar",
        navbarName:"viewOne.navbar",
        icon: BusinessIcon,
        component: ViewOne,
    },
];

describe('ChildWindow layout',()=>{

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
    });

    afterEach(()=>{
        // mount.cleanUp();
    });

    it ('render in normal state correctly by default',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <MemoryRouter initialEntries={['/childWindow/view-one']}>
                        <ChildWindow
                            appLogo={''}
                            routes={childRoutes}
                            location={{pathname:'/childWindow/view-one'}}/>
                    </MemoryRouter>
                </ThemeProvider>
            </ReactOpenfin>
        );
        expect(wrapper.find(ViewOne)).toHaveLength(1);
        expect(wrapper.find(ChildWindow)).toHaveLength(1);
        wrapper.find(Header).props().onMinimize();
        wrapper.find(Header).props().onMaximize();
        wrapper.find(Header).props().onClose();
        expect(wrapper.find(Snackbar)).toHaveLength(1);
        // wrapper.find(Snackbar).props().onClose();
        // wrapper.find(Snackbar).props().onExited();
    })

    // it('render SnackbarContent and could be closed correctly',()=>{
    //     const initState = {
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
    //         config:rootDefaultState.config,
    //     }
    //     const store = mockStore(initState);
    //     const wrapper = mount(
    //         <ThemeProvider theme={muiTheme}>
    //             <Provider store={store}>
    //                 <MemoryRouter initialEntries={['/childWindow/view-one']}>
    //                     <GlobalContext config={rootDefaultState.config}>
    //                         <ChildWindow location={{pathname:'/childWindow/view-one'}}/>
    //                     </GlobalContext>
    //                 </MemoryRouter>
    //             </Provider>
    //         </ThemeProvider>
    //     );
    //     expect(wrapper.find(ViewOne)).toHaveLength(1);
    //     expect(wrapper.find(ChildWindow)).toHaveLength(1);
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
