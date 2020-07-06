import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

    // Cấu hình màu dùng chung 
    color: {
        primary: "#F44336",
        secondary: "#448AFF",
        error: "#FF5722"
    },

    // Cấu hình font dùng chung 
    typography: {
        fontFamily: "Roboto"
    },

    shape: {
        textColor: "white",
        backgroundColor: "pink",
        borderRadius: 4,        
        border: "gray"
    }
});

export default theme;