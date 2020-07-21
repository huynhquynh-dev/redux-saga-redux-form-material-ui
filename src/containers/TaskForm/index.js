import React, { Component } from "react";

import styles from "./styles";
import { withStyles, Grid, Button, Box } from "@material-ui/core";

import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as modalActions from "../../actions/modal";
import * as taskActions from "../../actions/task";

// Redux-Form
import { Field, reduxForm } from "redux-form";
import renderTextField from "../../components/FormHelper/TextField";
import validate from './validate';

class TaskForm extends Component {

    handleSubmitForm = data => {
        const {taskActionCreators} = this.props;
        const { addTask } = taskActionCreators;
        const { title, description } = data;
        addTask(title, description);
    }
    // Validate từng field
    // required = value => {
    //     let error = 'Vui lòng nhập tiêu đề';
    //     if(value !== null && typeof value !== "undefined" && value.trim() !== '') {
    //         error = null;
    //     }
    //     return error;
    // }
    // minLength5 = value => {
    //     let error = null;
    //     if (value.length < 5) {
    //         error = "Tiêu đề phải lớn hơn 5 kí tự";
    //     }
    //     return error;
    // }

    render() {
        // handleSubmit là hàm của redux-form tự tạo
        // invalid thể hiện form đã hợp lệ để submit chưa
        // submitting thể hiện trạng thái có đang submit hay k và cản lại submit nhiều lần khi đang submit
        const { classes, modalActionCreators, handleSubmit, invalid, submitting } = this.props;
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
                            // validate={[this.required, this.minLength5]}
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
                                    disabled={invalid || submitting}
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
    taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// Redux-Form
const FORM_NAME = "TASK_MANAGEMENT";
const withReduxForm = reduxForm({
    form: FORM_NAME,
    validate
});

export default compose(
    withStyles(styles),
    withConnect,
    withReduxForm,
)(TaskForm);
