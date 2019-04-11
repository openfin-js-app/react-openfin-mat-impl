import * as React from 'react';
import { act } from 'react-dom/test-utils';
import initState from 'react-openfin/init';
import { InitializeReactOpenfin, ReactOpenfin, REACT_OPENFIN_STORE } from 'react-openfin';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { createShallow, createMount } from '@material-ui/core/test-utils';

import ConfigLangField from './ConfigLangField';

const theme = createMuiTheme({});

declare const window:any;

describe('ConfigLangField',()=>{

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

    it('render en-US correctly and switch to zh-CN',()=>{

        const wrapper = mount(
            <ReactOpenfin
            >
                <ThemeProvider theme={theme}>
                    <ConfigLangField/>
                </ThemeProvider>
            </ReactOpenfin>
        );
        const btns = wrapper.find(Button);
        expect(btns).toHaveLength(1);

        const language1 = window[REACT_OPENFIN_STORE].getState().config.application.language;

        // btns.props().onClick({event:{currentTarget:btns}});
        btns.simulate('click')

        // expect(wrapper.find(MenuItem)).toHaveLength(2);

        const menu = wrapper.find(Menu);
        menu.props().onClose();

        const menuItems = wrapper.find(MenuItem);
        expect(menuItems).toHaveLength(2);

        menuItems.at(1).simulate('click');

        const language2 = window[REACT_OPENFIN_STORE].getState().config.application.language;

        expect(language1).not.toEqual(language2);

    })

})
