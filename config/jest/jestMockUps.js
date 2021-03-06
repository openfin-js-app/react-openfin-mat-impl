jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate HoC receive the t function as a prop
    withTranslation: () => Component => {
        Component.defaultProps = { ...Component.defaultProps, t: () => "" };
        return Component;
    },
    useTranslation: (ns, options) => {
        return {
            t: (label)=>label,
            i18n: {
                changeLanguage:()=>{}
            },
            ready: true,
        }
    }
}));