import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

class SearchBox extends Component {
    render() {
        const { classes, handleChange } = this.props;

        return (
            <form className={classes.searchBox} noValidate autoComplete="off">
                <TextField
                    variant="outlined"
                    name="name"
                    className={classes.textField}
                    placeholder="Nhập từ khóa..."
                    onChange={handleChange}
                />
            </form>
        );
    }
}

SearchBox.propTypes = {
    classes: PropTypes.object,
    handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
