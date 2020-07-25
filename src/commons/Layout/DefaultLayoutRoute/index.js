import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

import { Route } from "react-router-dom";

class DefaultLayoutRoute extends Component {
    render() {
        const { component: YornComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={(routeProps) => {
                    return <YornComponent {...routeProps} />;
                }}
            />
        );
    }
}

export default withStyles(styles)(DefaultLayoutRoute);
