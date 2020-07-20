const styles = theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        boxShadow: theme.shadows[5],
    },
    header: {
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor,
        padding: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: theme.shape.textColor,
        fontSize: 20,
        textTransform: "capitalize",
    },
    icon: {
        cursor: "pointer",
        fontSize: 30,
    },
    content: {
        padding: theme.spacing(2),
    },
});

export default styles;