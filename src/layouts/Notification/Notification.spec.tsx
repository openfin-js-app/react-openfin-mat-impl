import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin, MuiTheme } from 'react-openfin';
import IconButton from '@material-ui/core/IconButton';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';
import { MemoryRouter } from 'react-router-dom';

import {RouteItem} from '../../routes'

import Notification from './Notification';

const muiTheme = createMuiTheme({});

const SampleNotification:React.FunctionComponent<{}> = ({})=>{
    return (
        <React.Fragment>
            dummy sample notification
        </React.Fragment>
    )
}

const notificationRoutes:RouteItem[]=[
    {
        path:'/notification/sample',
        component: SampleNotification,
    }
]


describe('Notification layout',()=>{

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
        mount = createMount();
    });

    afterAll(() => {
        mount.cleanUp();
    });


    beforeEach(() => {
        shallow = createShallow();
    });

    it('render in default state correctly',()=>{

        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <MemoryRouter initialEntries={['/notification']}>
                        <Notification
                            routes={notificationRoutes}
                            location={{pathname:'/notification'}}
                        />
                    </MemoryRouter>
                </ThemeProvider>
            </ReactOpenfin>
        );

        expect(wrapper.find(Notification)).toHaveLength(1);
        expect(wrapper.find(IconButton)).toHaveLength(1);

        wrapper.find(IconButton).props().onClick();

    })

})
