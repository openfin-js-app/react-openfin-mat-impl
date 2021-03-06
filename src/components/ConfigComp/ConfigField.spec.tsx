import * as React from 'react';
import { FieldType } from 'react-openfin';
import toJson from 'enzyme-to-json';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createShallow, createMount } from '@material-ui/core/test-utils';

// import {
//     DateTimePicker,
// } from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';

import ConfigField from './ConfigField';

const theme = createMuiTheme({});

describe('ConfigField comp',()=>{

    let shallow;
    let mount;

    beforeEach(() => {
        mount = createMount();
        shallow = createShallow();
    });

    afterEach(()=>{
        mount.cleanUp();
    });

    it('TITLE field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.TITLE}
                    _label={'label'}
                    value={''}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('SUBHEADING field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.SUBHEADING}
                    _label={'label'}
                    value={''}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('CUSTOM_FIELD field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.CUSTOM_FIELD}
                    _label={'label'}
                    value={''}
                    _custom={<span>Custom field</span>}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('CURRENCY field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.CURRENCY}
                    _label={'label'}
                    value={1}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })


    it('CURRENCY field fires onChange correctly',()=>{
        const onChange = jest.fn();
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.CURRENCY}
                    _label={'label'}
                    value={1}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        expect(wrapper.find(TextField)).toHaveLength(1);
        wrapper.find(TextField).props().onChange({target:{value:'2.345'}});
        expect(onChange).toHaveBeenCalled();
    })

    it('STRING field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.STRING}
                    _label={'label'}
                    value={'string'}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })


    it('STRING field fires onChange correctly',()=>{
        const onChange = jest.fn();
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.STRING}
                    _label={'label'}
                    value={'str1'}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        expect(wrapper.find(TextField)).toHaveLength(1);
        wrapper.find(TextField).props().onChange({target:{value:'str2'}});
        expect(onChange).toHaveBeenCalled();
    })

    it('NUMBER field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.NUMBER}
                    _label={'label'}
                    value={1}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })


    it('NUMBER field fires onChange correctly',()=>{
        const onChange = jest.fn();
        const wrapper = mount(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.NUMBER}
                    _label={'label'}
                    value={1}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        expect(wrapper.find(TextField)).toHaveLength(1);
        wrapper.find(TextField).props().onChange({target:{value:'2'}});
        expect(onChange).toHaveBeenCalled();
    })

    it('DATE field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.DATE}
                    _label={'label'}
                    value={'01/01/1990'}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })

    it('TIME field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.TIME}
                    _label={'label'}
                    value={new Date('1990-12-17T03:24:00')}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })

    it('DATETIME field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.DATETIME}
                    _label={'label'}
                    value={new Date('1990-12-17T03:24:00')}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        const comp = toJson(wrapper);
        if (comp.props.id){
            comp.props.id = 'config_field_id';
        }
        expect(comp).toMatchSnapshot();
    })


    // todo fix this test case
    // it('DATETIME field fires onChange correctly',()=>{
    //     const onChange = jest.fn();
    //     const wrapper = mount(
    //         <ThemeProvider theme={theme}>
    //             <ConfigField
    //                 _type={FieldType.DATETIME}
    //                 _label={'label'}
    //                 value={new Date('1990-12-17T03:24:00')}
    //                 onChange={onChange}
    //             />
    //         </ThemeProvider>
    //     );
    //     expect(wrapper.find(DateTimePicker)).toHaveLength(1);
    //     wrapper.find(DateTimePicker).props().onChange({_d:new Date('1991-12-17T03:24:00')});
    //     expect(onChange).toHaveBeenCalled();
    // })

    it('BODY1 field renders correctly',()=>{
        const onChange = jest.fn();
        const wrapper = shallow(
            <ThemeProvider theme={theme}>
                <ConfigField
                    _type={FieldType.BODY1}
                    _label={'label'}
                    value={''}
                    onChange={onChange}
                />
            </ThemeProvider>
        );
        // const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    })

});
