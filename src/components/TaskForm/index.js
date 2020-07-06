import React, { Component } from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core';

// Task Form Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// Thêm Button Material UI
import Button from '@material-ui/core/Button';

class TaskForm extends Component {

    render() {
        const { classes, open, onCloseForm } = this.props; 

        return (
            <Dialog open={open} onClose={onCloseForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    <TextField
                        id="standard-basic"
                        label="Name"   
                        className={classes.textField}
                        margin="normal"                     
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        className={classes.textField} 
                        margin="normal" 
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    </DialogContentText>                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseForm} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onCloseForm} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(TaskForm);