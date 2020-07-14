import React, { Component } from "react";

import styles from "./styles";
import { withStyles, Grid, Button, Box } from "@material-ui/core";

import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";

// Redux-Form
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";

class TaskForm extends Component {

    handleSubmitForm = data => {
        console.log(data);
    }

    render() {
        // handleSubmit là hàm của redux-form tự tạo
        const { classes, modalActionCreators, handleSubmit } = this.props;
        const { hideModal } = modalActionCreators;

        return (
            <form onSubmit={handleSubmit(this.handleSubmitForm)} >
                <Grid container>
                    <Grid item md={12}>
                        <Field
                            id='title'
                            label="Tiêu đề"
                            margin="normal"
                            className={classes.textField}
                            // name bắt buộc phải có để lưu vào state
                            name="title"
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Field
                            id='description'
                            label="Mô tả"
                            className={classes.textField}
                            margin="normal"
                            multiline
                            rowsMax={4}
                            name="description"
                            component={renderTextField}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <Box mt={1} display="flex" flexDirection="row-reverse">
                            <Box>
                                <Button variant="contained" onClick={hideModal}>
                                    Hủy bỏ
                                </Button>
                            </Box>
                            <Box mr={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type='submit'
                                >
                                    Lưu lại
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// Redux-Form
const FORM_NAME = "TASK_MANAGEMENT";
const withReduxForm = reduxForm({
    form: FORM_NAME,
});

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);
