import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useTranslation } from 'react-i18next';

import { configAboutFieldStyle as style } from '../../assets/jss';

const useStyles = makeStyles(style);

interface IProps {
    appLogo:string,
    companyLogo:string,
    supporterEmail?:string,
}

const ConfigAboutField:React.FunctionComponent<IProps> = (
    {
        appLogo,
        companyLogo,
        supporterEmail,
    }
)=>{

    const classes = useStyles({});

    const { t, i18n } = useTranslation('landing', { useSuspense: false });

    const handleReloadBtnClick = ()=>{
        location.reload();
    }

    const handleSupportBtnClick = ()=>{
        window.location.href = `mailto:mail@${supporterEmail?supporterEmail:'liwentao90@yahoo.com'}`
    }

    return (<React.Fragment>
        <div className={classes.outmostContainer}>
            <div className={classes.imgContainer}>
                <img className={classes.appImg} src = {appLogo}/>
                <img className={classes.companyImg} src = {companyLogo}/>
            </div>
            <Typography variant="h3">
                {t('appName')}
            </Typography>
            <Typography variant="h5">
                {t('appDesc')}
            </Typography>
            <Typography variant="h6">
                {t('version')} {process.env.REACT_APP_VERSION}
            </Typography>

            <div className={classes.btnContainer}>
                <Button variant="contained" color='primary'
                        onClick={handleReloadBtnClick}
                >{t('reload')}</Button>
                <Button variant="contained" color='secondary'
                        onClick={handleSupportBtnClick}
                >{t('support')}</Button>
            </div>
            <Typography variant={"subtitle1"}>
                {t('copyright')}
            </Typography>

        </div>
    </React.Fragment>)
}

export default ConfigAboutField;