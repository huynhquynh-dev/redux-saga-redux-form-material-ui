import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as uiAction from "./../../actions/ui";

import cn from "classnames";

class Dashboard extends Component {
    handleToggleSidebar = (value) => {
        const { uiActionCreators } = this.props;
        const { showSidebar, hideSidebar } = uiActionCreators;
        if (value) {
            showSidebar();
        } else {
            hideSidebar();
        }
    };

    render() {
        const { classes, children, name, showSidebar } = this.props;
        return (
            <div className={classes.dashboard}>
                <Header
                    name={name}
                    showSidebar={showSidebar}
                    onToggleSidebar={this.handleToggleSidebar}
                />
                <div className={classes.wrapper}>
                    <Sidebar
                        showSidebar={showSidebar}
                        onToggleSidebar={this.handleToggleSidebar}
                    />
                    <div
                        // Tạo ra class dựa vào điều kiện bằng thư viện yarn add classnames --save
                        className={cn(classes.wrapperContent, {
                            [classes.shiftLeft]: showSidebar === false,
                        })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showSidebar: state.ui.showSidebar,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        uiActionCreators: bindActionCreators(uiAction, dispatch),
    };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Dashboard);
