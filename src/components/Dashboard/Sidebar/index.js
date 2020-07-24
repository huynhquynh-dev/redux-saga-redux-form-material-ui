import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";

import { ADMIN_ROUTES } from "./../../../constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
        };
    }

    toggleDrawer = (value) => {
        this.setState({
            open: value,
        });
    };

    renderList() {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <div className={classes.list}>
                <List component="div">
                    {ADMIN_ROUTES.map((item) => {
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                exact={item.exact}
                                className={classes.menuLink}
                                activeClassName={classes.menuLinkActive}
                            >
                                <ListItem className={classes.menuItem} button>
                                    {item.name}
                                </ListItem>
                            </NavLink>
                        );
                    })}
                </List>
            </div>
        );
        return xhtml;
    }

    render() {
        const { open } = this.state;
        const { classes } = this.props;
        return (
            <Drawer
                open={open}
                onClose={() => this.toggleDrawer(false)}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="persistent"
            >
                {this.renderList()}
            </Drawer>
        );
    }
}

export default withStyles(styles)(Sidebar);
