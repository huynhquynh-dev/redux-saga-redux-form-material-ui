import React, { Component } from "react";
import styles from "./styles";
import {
    withStyles,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class SignupPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.background}>
                <div className={classes.signup}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="inherit">
                                        Đăng ký tài khoản
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
                                <TextField
                                    id="confirmpassword"
                                    label="Confirm Password"
                                    className={classes.textField}
                                    fullWidth
                                    margin="normal"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="agree" />}
                                    label="Tôi đã đọc chính sách và đồng ý điều khoản"
                                    className={classes.fullWidth}
                                />
                                <Button
                                    className={classes.button}
                                    color="primary"
                                    fullWidth
                                    variant="contained"
                                    type="submit"
                                >
                                    Signup
                                </Button>
                                <div className="pt-1 text-md-center">
                                    <Link to="/login">
                                        <Button>Đã có tài khoản?</Button>
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

export default withStyles(styles)(SignupPage);
