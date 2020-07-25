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
import theme from "../../commons/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Provider } from "react-redux";
import configStore from "../../redux/configStore";

// Thư viện hiển thị thông báo
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalLoading from "../../components/GlobalLoading";
import CommonModal from "../../components/CommonModal";

import { BrowserRouter, Switch } from "react-router-dom";

import { ADMIN_ROUTES, ROUTES } from "./../../constants";
import AdminLayoutRoute from "../../commons/Layout/AdminLayoutRoute";
import DefaultLayoutRoute from "../../commons/Layout/DefaultLayoutRoute";

const store = configStore();

class App extends PureComponent {
    renderAdminRoutes() {
        let xhtml = null;
        xhtml = ADMIN_ROUTES.map((route) => {
            return (
                <AdminLayoutRoute
                    key={route.path}
                    name={route.name}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
        return xhtml;
    }
    renderDefaultRoutes() {
        let xhtml = null;
        xhtml = ROUTES.map((route) => {
            return (
                <DefaultLayoutRoute
                    key={route.path}
                    name={route.name}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
        return xhtml;
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <ToastContainer />
                        <GlobalLoading />
                        <CommonModal />
                        <Switch>
                            {this.renderAdminRoutes()}
                            {this.renderDefaultRoutes()}
                        </Switch>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);
