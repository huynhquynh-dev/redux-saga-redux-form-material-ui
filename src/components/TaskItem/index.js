import React, { Component } from "react";

import styles from "./styles";
import { withStyles } from "@material-ui/core";

// Chia cột
import Grid from "@material-ui/core/Grid";

// Thêm Card
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

// Dùng cho các thẻ text
import Typography from "@material-ui/core/Typography";

// Floating Action Button
import Fab from "@material-ui/core/Fab";

import Icon from "@material-ui/core/Icon";

class TaskItem extends Component {
    render() {
        const { classes, task, status, onClickEdit, onClickDelete } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify="space-between">
                        <Grid item md={8}>
                            <Typography component="h2">{task.title}</Typography>
                        </Grid>
                        <Grid item md={4}>
                            {status.lable}
                        </Grid>
                    </Grid>
                    <p>{task.description}</p>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab
                        color="primary"
                        aria-label="Edit"
                        size="small"
                        className={classes.fab}
                        onClick={onClickEdit}
                    >
                        <Icon fontSize="small">edit_icon</Icon>
                    </Fab>
                    <Fab
                        color="primary"
                        aria-label="Delete"
                        size="small"
                        className={classes.fab}
                        onClick={onClickDelete}
                    >
                        <Icon fontSize="small">delete_icon</Icon>
                    </Fab>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(TaskItem);
