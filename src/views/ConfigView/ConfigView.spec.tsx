import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';
import configTabs from 'react-openfin/reduxs/config/constant';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import ConfigView from './ConfigView';

const muiTheme = createMuiTheme({});

const MyConfigView:React.FunctionComponent<{}> = ({})=>{
    return (<ConfigView tabs={configTabs}/>)
}

describe('ConfigView',()=>{

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
        const wrapper = shallow(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <MyConfigView/>
                </ThemeProvider>
            </ReactOpenfin>
        );
        expect(wrapper).toBeTruthy();
    });

});
