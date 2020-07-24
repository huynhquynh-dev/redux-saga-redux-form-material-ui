import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";

class Dashboard extends Component {
    render() {
        const { classes, children, name } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header name={name} />
                <div className={classes.wrapper}>
                    <Sidebar />
                    <div className={classes.wrapperContent}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
