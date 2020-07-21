import React from "react";
import { FormControl, InputLabel, Select, FormHelperText, withStyles } from "@material-ui/core";
import styles from "./styles";

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return null;
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>;
    }
};

const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) => (
    <FormControl error={touched && error} className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
        <Select
            {...input}
            {...custom}
            inputProps={{
                name: "age",
                id: "age-native-simple",
            }}
            value={input.value}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
);

export default withStyles(styles) (renderSelectField);
