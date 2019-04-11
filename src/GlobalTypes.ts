import * as React from 'react';

export interface ISideBarMenuItem {
    icon:React.ReactElement,
    label:string,
    onClick:(...args:any[])=>void,
}