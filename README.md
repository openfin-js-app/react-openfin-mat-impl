# Material UI Implementation of React Openfin
[![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]
[![Build Status](https://travis-ci.com/openfin-js-app/react-openfin-mat-impl.svg?branch=master)](https://travis-ci.com/openfin-js-app/react-openfin-mat-impl)
[![Coverage Status](https://coveralls.io/repos/github/openfin-js-app/react-openfin-mat-impl/badge.svg?branch=master)](https://coveralls.io/github/openfin-js-app/react-openfin-mat-impl?branch=master)

Reusable openfin react components implemented via React Material UI


[LICENSE]: ./LICENSE.md
[CHANGELOG]: ./CHANGELOG.md

![](https://albertleigh.github.io/openfin-react-latest/img/screenshoot.gif)


## Installation

```text
    npm i react-openfin-mat-impl
    or 
    yarn add react-openfin-mat-impl
```

## Usages
```typescript jsx
import {
    ConfigAboutField,
    ConfigThemeField,
    ConfigLangField,
    ConfigJsonField,
    ConfigView, 
    ReportView, 
    LoadingLyt,
    DashboardLyt,
    ChildWindowLyt,
    NotificationLyt,
    LaunchBarLyt
} from 'react-openfin-mat-impl';


import dashboardRoutes from './Dashboard';
import childrenRoutes from './ChildWindow';
import notificationRoutes from './notification';
import launchBarItems from '../constants/launchBarItems';

import appLogo from '../assets/svg/app.svg';
import companyLogo from '../assets/svg/company.svg';

export const MyConfigView:React.FunctionComponent<{}> = ({})=>{
    return (<ConfigView tabs={configTabs}/>)
}

const Loading:React.FunctionComponent<{}> = ({})=>{
    return (<LoadingLyt appLogo={appLogo} companyLogo={companyLogo} version={process.env.REACT_APP_VERSION}/>)
}

const Dashboard:React.FunctionComponent<{}> = ({...rest}) => {
    return (<DashboardLyt appLogo={appLogo} routes={dashboardRoutes} {...rest}/>)
}

const ChildWindow:React.FunctionComponent<{}> = ({...rest}) => {
    return (<ChildWindowLyt appLogo={appLogo} routes={childrenRoutes} {...rest}/>)
}

const Notification:React.FunctionComponent<{}> = ({})=>{
    return (<NotificationLyt routes={notificationRoutes}/>)
}

const LaunchBar:React.FunctionComponent<{}> = ({})=>{
    return (<LaunchBarLyt appLogo={appLogo} items={launchBarItems}/>)
}

```


[version-badge]: https://img.shields.io/badge/version-0.70.20-green.svg
[license-badge]: https://img.shields.io/badge/license-MIT-green.svg
