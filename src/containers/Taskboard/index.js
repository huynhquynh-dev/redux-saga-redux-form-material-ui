import React, { Component } from 'react';

// Gắn styles vào class App
import { withStyles } from '@material-ui/core';
import styles from './styles';

// Thêm Button Material UI
import Button from '@material-ui/core/Button';

// Thêm icon Add
import AddIcon from '@material-ui/icons/Add';

// Chia cột 
import Grid from '@material-ui/core/Grid';

import { STATUS } from '../../constants';

import TaskList from '../../components/TaskList';

import TaskForm from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: 'Ready book',
        description: 'Dữ liệu mẫu 1',
        status: 0
    },
    {
        id: 2,
        title: 'Play footboll',
        description: 'Dữ liệu mẫu 2',
        status: 2
    },
    {
        id: 3,
        title: 'Gaming book',
        description: 'Dữ liệu mẫu 3',
        status: 1
    },
];

class Taskboard extends Component {

    state = {
        open: false
    }
    
    renderBoard = () => {
        // const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUS.map(status => {
                        const taskFilterd = listTask.filter(
                            task => task.status === status.value
                        );
                        return <TaskList key={status.value} tasks={taskFilterd} status={status} />
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    renderForm = () => {
        // const { classes } = this.props;
        const { open } = this.state;

        let xhtml = null;
        xhtml = (
            <TaskForm open={open} onCloseForm={this.handleClose} />
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.taskboard} >
                <Button variant="contained" color="primary" className={classes.button} onClick={() => this.handleClickOpen()}>
                    <AddIcon /> Thêm mới công việc
                </Button>

                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);