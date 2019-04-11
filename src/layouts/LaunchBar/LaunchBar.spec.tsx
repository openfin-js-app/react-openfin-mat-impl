import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin, ILaunchBarItem } from 'react-openfin';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import AccessibilityIcon from '@material-ui/icons/Accessibility';

import LaunchBar from './LaunchBar';

const muiTheme = createMuiTheme({});

export const sampleItems:ILaunchBarItem[]=[
    {
        icon:AccessibilityIcon,
        disabled:false,
        svg:null,
        appJson:{
            name:`REACT_APP_FIN_UUID-child-accessibility`,
            url:'/childWindow/accessibility',
            frame:false,
            resizable:true,
            state:'normal',
            autoShow:true,
            minWidth:520,
            minHeight:170,
        },
    },

];

describe('LaunchBar Layout',()=>{

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

    it('render correctly and launch all non-disabled windows',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <LaunchBar
                        appLogo={''}
                        items={sampleItems}
                    />
                </ThemeProvider>
            </ReactOpenfin>
        );
        wrapper.find(IconButton).forEach((iconBtn)=>{
            const props = iconBtn.props();
            if ( props.disabled === false && typeof props.onClick === 'function'){
                props.onClick();
            }
        });
    });

    it('trigger all control panel btns',()=>{
        const wrapper = mount(
            <ReactOpenfin>
                <ThemeProvider theme={muiTheme}>
                    <LaunchBar
                        appLogo={''}
                        items={sampleItems}
                    />
                </ThemeProvider>
            </ReactOpenfin>
        );
        wrapper.find(Button).forEach((btn)=>{
            const props = btn.props();
            if ( typeof props.onClick === 'function'){
                props.onClick();
            }
        });
    });

    // it('render collapsed button container',()=>{
    //     const wrapper = mount(
    //         <ThemeProvider theme={muiTheme}>
    //             <LaunchBar/>
    //         </ThemeProvider>
    //     );
    //     expect(wrapper).toBeTruthy();
    // });
});
