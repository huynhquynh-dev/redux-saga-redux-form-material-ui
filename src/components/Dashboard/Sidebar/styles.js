const styles = (theme) => ({
    drawerPaper: {
        width: 240,
        maxWidth: 240,
        zIndex: 10, //nằm dưới loading
        height: "100%",
        position: "relative",
    },
    menuLink: {
        textDecoration: "none",
        color: theme.color.default,
    },
    menuLinkActive: {
        "&>div": {
            backgroundColor: theme.color.hoverColor,
        },
    },
});

export default styles;
