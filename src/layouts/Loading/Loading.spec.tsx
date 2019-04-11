import * as React from 'react';
import { InitializeReactOpenfin, ReactOpenfin } from 'react-openfin';
import { createShallow, createMount } from '@material-ui/core/test-utils';

import Loading from './Loading';
import { LoadingBarComponent } from './Loading';

describe('LoadingLayout',()=>{

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

    it('render correctly',()=>{
        const wrapper = shallow(
            <ReactOpenfin>
                <Loading
                    appLogo={''}
                    companyLogo={''}
                    version={''}
                />
            </ReactOpenfin>
        );
        expect(wrapper).toBeTruthy();
    });


    it('Loading bar render correctly after a lone time',()=>{
        jest.useFakeTimers();
        const wrapper = mount(<LoadingBarComponent/>);
        expect(wrapper).toBeTruthy();
        jest.advanceTimersByTime(10*60*1000);
        expect(wrapper).toBeTruthy();
    });

});
