const styles = theme => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
    },
    wrapperContent: {
        width: "100%",
        padding: 10,
        // Animation
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    shiftLeft: {
        marginLeft: -240,
        // Animation
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    }
});

export default styles;
