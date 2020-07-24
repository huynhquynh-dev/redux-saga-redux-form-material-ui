import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';

import { Route } from "react-router-dom";
import Dashboard from '../../../components/Dashboard';

class AdminLayoutRoute extends Component {
    render() {
        const { component: YornComponent, ...remainProps } = this.props;
        return (
            <Route
                {...remainProps}
                render={ routeProps =>{
                    return (
                        <Dashboard {...remainProps}>
                            <YornComponent {...routeProps} />
                        </Dashboard>
                    )
                } }
            />
        );
    }
}

export default withStyles(styles) (AdminLayoutRoute);