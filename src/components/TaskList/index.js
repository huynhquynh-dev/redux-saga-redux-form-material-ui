import React, { Component } from "react";

import styles from "./styles";
import { withStyles } from "@material-ui/core";

// Chia cột
import Grid from "@material-ui/core/Grid";

// Tạo Box cho tiêu đề
import Box from "@material-ui/core/Box";
import TaskItem from "../TaskItem";

class TaskList extends Component {
    render() {
        const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;

        return (
            <Grid item xs={12} md={4}>
                <Box mt={2} mb={2} className={classes.status} >
                    <div className={classes.statusLable}>{status.lable}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {tasks.map((task) => {
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                status={status}
                                onClickEdit={() => onClickEdit(task)}
                                onClickDelete={() => onClickDelete(task)}
                            />
                        );
                    })}
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);
