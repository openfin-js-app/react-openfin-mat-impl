import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import ReportView from './ReportView';

const muiTheme = createMuiTheme({});

describe('ReportView',()=>{

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
        mount.cleanUp();
    });

    it('render correctly',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <ReportView/>
                </ThemeProvider>
            </ReactOpenfin>
        );
        expect(wrapper).toBeTruthy();

    })
});
