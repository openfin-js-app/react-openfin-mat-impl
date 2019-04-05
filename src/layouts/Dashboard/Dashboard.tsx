import * as React from 'react';
import { useContext } from 'react';
import { ApplicationContext, ConfigContext, MuiTheme } from 'react-openfin';
import {Redirect, Route, Switch} from 'react-router-dom';
import cx from 'classnames';

import Snackbar from '@material-ui/core/Snackbar';

import { makeStyles } from '@material-ui/styles';

import {RouteItem} from '../../routes';
import {Header, OfflineOverlay, Sidebar, SnackbarContent} from '../../components';

import {dashboardLayoutStyle as style} from '../../assets/jss';

interface IProps {
    appLogo:string,
    routes: RouteItem[],
    hideSwitchToLaunchbar?:boolean,
    headerPrefixElements?:React.ReactNode,
    headerSuffixElements?:React.ReactNode,
    // for testing
    location?:any,
}

const useStyles = makeStyles(style);

const DashbardLayout:React.FunctionComponent<IProps> = (
    {
        routes,
        hideSwitchToLaunchbar,
        headerPrefixElements,
        headerSuffixElements,
        ...rest
    }
)=>{

    const classes = useStyles();

    const {
        state:{
            offline,drawerOpen,
            snackBarOpen, snackBarMsgInfo, windowsState,
        },
        actions:{
            onDrawerToggle, onSnackBarClose, onSnackBarCloseBtnClick, onSnackBarExited,
            onLaunchBarToggle, onMinimize, onToggleWinState, onWinClose, onWinForceClose,
        }
    } = useContext(ApplicationContext);

    const {
        config:{
            application:{
                theme
            }

        }
    } = useContext(ConfigContext);

    return(<React.Fragment>
        <Header
            routes={routes}
            windowsState={windowsState}
            handleDrawerToggle={onDrawerToggle}
            open={drawerOpen}
            color={'primary'}
            docked={false}
            onSwitchToLaunchBar={hideSwitchToLaunchbar?null:onLaunchBarToggle}
            headerPrefixElements={headerPrefixElements}
            headerSuffixElements={headerSuffixElements}
            onMinimize={onMinimize}
            onMaximize={onToggleWinState}
            onClose = {onWinClose}
            {...rest}
        />
        <div className={cx(classes.wrapper, classes.wrapperPrimary)}>
            <Sidebar
                routes={routes}
                open={drawerOpen}
                color={"primary"}
                image={'/img/sidebar-1.jpg'}
                {...rest}
            />
            <div className={cx(
                classes.mainPanel,
                {
                    [classes.mainPanelShift]:!drawerOpen
                }
            )}
            >
                <div className={classes.container}>
                    <div className={
                        cx(
                            classes.content,
                            {
                                [classes.lightBoxShaddow]: theme === MuiTheme.LIGHT
                            }
                        )
                    }>
                        <Switch>
                            {routes.map((prop:any,key)=>{
                                if (prop.redirect)
                                    return <Redirect from={prop.path} to={prop.to} key={key}/>;
                                return <Route path={prop.path} component={prop.component} key={key}/>

                            })}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
        {/*snackbar*/}
        <Snackbar
            key={snackBarMsgInfo.key}
            anchorOrigin={{
                vertical:'bottom',
                horizontal:'center'
            }}
            open={snackBarOpen}
            autoHideDuration={6000}
            onClose={onSnackBarClose}
            onExited={onSnackBarExited}
        >
            <SnackbarContent
                onClose={onSnackBarCloseBtnClick}
                variant={snackBarMsgInfo.variant}
                message={snackBarMsgInfo.message}
            />
        </Snackbar>
        {
            offline?
                <OfflineOverlay
                    onClose={onWinForceClose}
                />
                :null
        }
    </React.Fragment>);
}

export default DashbardLayout;