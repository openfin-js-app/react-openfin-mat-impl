import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin, MuiTheme } from 'react-openfin';

import Switch from '@material-ui/core/Switch';

import { createShallow, createMount } from '@material-ui/core/test-utils';

import ConfigThemeField from './ConfigThemeField';

declare const window:any;

describe('Config Theme',()=>{

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

    it('render dark correctly and switch theme twice',()=>{

        const wrapper = mount(
            <ReactOpenfin>
                <ConfigThemeField/>
            </ReactOpenfin>
        );

        const switches = wrapper.find(Switch);
        expect(switches).toHaveLength(1);

        const theme1 = window.REACT_OPENFIN_STORE.getState().config.application.theme;
        switches.at(0).props().onChange();
        const theme2 = window.REACT_OPENFIN_STORE.getState().config.application.theme;

        expect(theme1).not.toEqual(theme2);

    })

})
