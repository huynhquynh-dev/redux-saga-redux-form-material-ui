import React, { PureComponent } from 'react';

// MATERIAL UI 
// https://material-ui.com/getting-started
// B1: npm install @material-ui/core 
// B2: link font roboto, font icons -> indexedDB.html 
// B3: npm install @material-ui/icons -> SVG Icons 

import styles from './styles';
import { withStyles } from '@material-ui/core';

import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme';

class App extends PureComponent {

    render() {        
        return (
            <ThemeProvider theme={theme}>
                <Taskboard />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles) (App);
