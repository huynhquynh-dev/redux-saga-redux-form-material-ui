// theme nhận từ ThemeProvider ở class App
const styles = (theme) => ({
    background: {
        backgroundColor: theme.color.secondary,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        flex: "1 0 auto",
    },
    login: {},
    textField: {},
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
});

export default styles;
