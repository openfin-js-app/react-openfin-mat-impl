import {CSSProperties} from "@material-ui/core/styles/withStyles";

const drawerWidth = 260;

const appbarHeight = 20;
const windowBorder = 4;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const container = {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto"
};

const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: "1.5em"
};

const primaryColor = "#1e88e5";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const greyColor = "#999999";

export interface IOpenfinMatImplStyleConstant{
    drawerWidth : number,
    appbarHeight : number,
    windowBorder : number,
    transition : {
        transition : string,
    },
    container : CSSProperties,
    boxShadow : {
        boxShadow : string,
    },
    defaultFont: CSSProperties,
    primaryColor :string,
    warningColor :string,
    dangerColor :string,
    successColor :string,
    infoColor :string,
    roseColor :string,
    greyColor :string,
}

const initState:IOpenfinMatImplStyleConstant = {
    // variables
    drawerWidth,
    appbarHeight,
    windowBorder,
    transition,
    container,
    boxShadow,
    defaultFont,
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    greyColor,
};

export const initializeState = (state:Partial<IOpenfinMatImplStyleConstant>)=>{
    Object.keys(initState).forEach( key => {
        if (state[key]){
            initState[key] = state[key]
        }
    })
}

export default initState;
