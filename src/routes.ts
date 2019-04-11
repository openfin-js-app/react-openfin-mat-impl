import { ShownField } from 'react-openfin';

import * as React from 'react';
import {SvgIconProps} from '@material-ui/core/SvgIcon'

export type RouteItem = (IRouteCompItem|IRouteRedirectItem);

export interface IRouteCompItem {
    path:string,
    sidebarName?:string,
    navbarName?:string,
    icon?:React.ComponentType<SvgIconProps>,
    component:React.ComponentType<any>,
    shown?:ShownField,
    [key:string]:any,
}

export interface IRouteRedirectItem {
    redirect:boolean,
    path:string,
    to:string,
    navbarName:string,
}