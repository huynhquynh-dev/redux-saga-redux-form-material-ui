import React, { Component } from 'react';
import styles from './styles';
import { withStyles, Modal } from '@material-ui/core';

import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from "@material-ui/icons/Close";

import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

class CommonModal extends Component {
    render() {
        const { classes, open, title, component, modalActionCreators } = this.props;
        const { hideModal } = modalActionCreators;
        return (
            <Modal
                open={open}
                onClose={hideModal}
                className={classes.modal}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={classes.paper}>
                    <div className={classes.header}>
                        <span className={classes.title}>{title}</span>
                        <CloseIcon
                            className={classes.icon}
                            onClick={hideModal}
                        />
                    </div>
                    <div className={classes.content}>
                        {component}
                    </div>
                </div>
            </Modal>
        );
    }
}

const mapStateToProps = state => ({
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
    modalActionCreators: bindActionCreators(modalActions, dispatch),

})

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
    withStyles(styles),
    withConnect,
) (CommonModal);