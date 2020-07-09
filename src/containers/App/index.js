import React, { PureComponent } from "react";

// npm i --save-dev eslint

// MATERIAL UI
// https://material-ui.com/getting-started
// B1: npm install @material-ui/core
// B2: link font roboto, font icons -> indexedDB.html
// B3: npm install @material-ui/icons -> SVG Icons

import styles from "./styles";
import { withStyles } from "@material-ui/core";

import { ThemeProvider } from "@material-ui/core/styles";
import Taskboard from "../Taskboard";
import theme from "../../commons/Theme";

import { Provider } from "react-redux";
import configStore from "../../redux/configStore";

// Thư viện hiển thị thông báo
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from "../../components/GlobalLoading";

const store = configStore();

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <GlobalLoading />
                    <Taskboard />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
