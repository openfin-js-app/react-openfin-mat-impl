import * as React from 'react';
import { useContext, useEffect } from 'react';
import { ApplicationContext, ConfigContext, MuiTheme } from 'react-openfin';
import { Switch, Route, Redirect } from 'react-router-dom';
import cx from 'classnames';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/styles';
import { RouteItem } from '../../routes';

import { Header,SnackbarContent } from '../../components';

import { dashboardLayoutStyle as style } from '../../assets/jss';

interface IProps {
    appLogo:string,
    routes: RouteItem[],
    headerPrefixElements?:React.ReactNode,
    headerSuffixElements?:React.ReactNode,
    // for testing
    location?:any,
}

const useStyles = makeStyles(style);

const ChildWindowLayout:React.FunctionComponent<IProps> = (
    {
        routes,
        headerPrefixElements,
        headerSuffixElements,
        ...rest
    }
) => {

    const classes = useStyles();

    const {
        state:{
            docked,
            snackBarOpen, snackBarMsgInfo, windowsState,
        },
        actions:{
            onSetAsForeground,
            onSnackBarClose, onSnackBarCloseBtnClick, onSnackBarExited,
            onUndock, onMinimize, onToggleWinState, onWinClose
        }
    } = useContext(ApplicationContext);

    const {
        config:{
            application:{
                theme
            }

        }
    } = useContext(ConfigContext);

    useEffect(()=>{
        onSetAsForeground();
        // return ()=>{
        //
        // }
    });

    return(
        <React.Fragment>
            <Header
                routes={routes}
                windowsState={windowsState}
                color={'info'}
                docked={docked}
                headerPrefixElements={headerPrefixElements}
                headerSuffixElements={headerSuffixElements}
                onUndock = {onUndock}
                onMinimize={onMinimize}
                onMaximize={onToggleWinState}
                onClose = {onWinClose}
                {...rest}
            />
            <div className={cx(classes.wrapper, classes.wrapperInfo)}>
                <div className={cx(
                    classes.mainPanel,classes.mainPanelShift
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
        </React.Fragment>
    );
}

export default ChildWindowLayout;