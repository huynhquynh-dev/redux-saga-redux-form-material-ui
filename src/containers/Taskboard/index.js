import React, { Component } from "react";
import PropTypes from "prop-types";

// Gắn styles vào class App
import { withStyles } from "@material-ui/core";
import styles from "./styles";

// Thêm Button Material UI
import Button from "@material-ui/core/Button";

// Thêm icon Add
import AddIcon from "@material-ui/icons/Add";

// Chia cột
import Grid from "@material-ui/core/Grid";

import { STATUS } from "../../constants";

import TaskList from "../../components/TaskList";
import TaskForm from "../TaskForm";

// Data caller
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";
import SearchBox from "../../components/SearchBox";

import * as modalActions from "./../../actions/modal";

class Taskboard extends Component {
    state = {
        open: false,
    };

    renderBoard = () => {
        const { listTask } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {STATUS.map((status) => {
                    const taskFilterd = listTask.filter(
                        (task) => task.status === status.value
                    );
                    return (
                        <TaskList
                            key={status.value}
                            tasks={taskFilterd}
                            status={status}
                        />
                    );
                })}
            </Grid>
        );
        return xhtml;
    };

    openForm = () => {
        const { modalActionCreators } = this.props;
        const { showModal, changeModalTitle, changeModalContent} = modalActionCreators;
        showModal();
        changeModalTitle("Thêm mới công việc");
        changeModalContent(<TaskForm />);
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    // renderForm = () => {
    //     const { open } = this.state;
    //     let xhtml = null;
    //     xhtml = <TaskForm open={open} onCloseForm={this.handleClose} />;
    //     return xhtml;
    // };

    componentDidMount() {
        const { taskActionCreators } = this.props;
        // Sau khi lấy được thì gọi ra để lấy dữ liệu
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    }

    loadData = () => {
        const { taskActionCreators } = this.props;
        // Sau khi lấy được thì gọi ra để lấy dữ liệu
        const { fetchListTask } = taskActionCreators;
        fetchListTask();
    };

    handleFilter = (event) => {
        const { value } = event.target;
        const { taskActionCreators } = this.props;
        // Sau khi lấy được thì gọi ra để lấy dữ liệu
        const { filterTask } = taskActionCreators;
        filterTask(value);
    };

    renderSearchBox = () => {
        let xhtml = null;
        xhtml = <SearchBox handleChange={this.handleFilter} />;
        return xhtml;
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.taskboard}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => this.loadData()}
                    style={{
                        marginRight: 30,
                    }}
                >
                    Load Data
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => this.openForm()}
                >
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderSearchBox()}
                {this.renderBoard()}
                {/* {this.renderForm()} */}
            </div>
        );
    }
}

Taskboard.propTypes = {
    classes: PropTypes.object,
    taskActionCreators: PropTypes.shape({
        fetchListTask: PropTypes.func,
        filterTask: PropTypes.func,
    }),
    listTask: PropTypes.array,
    modalActionCreators: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeModalTitle: PropTypes.func,
        changeModalContent: PropTypes.func,
    }),
};

const mapStateToProps = (state) => {
    return {
        listTask: state.task.listTask,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        taskActionCreators: bindActionCreators(taskActions, dispatch),
        modalActionCreators: bindActionCreators(modalActions, dispatch),
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
