import React, { Component } from "react";
import styles from "./styles";
import { withStyles, TextField, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.login}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="inherit">
                                        Đăng nhập vào hệ thống
                                    </Typography>
                                </div>
                                <TextField
                                    id="email"
                                    label="Email"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <Button
                                    className={classes.button}
                                    color="primary"
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/signup">
                                        <Button>Đăng ký tài khoản mới</Button>
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginPage);
