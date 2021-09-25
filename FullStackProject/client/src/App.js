import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import agraw from './images/agraw.png';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    return(
        <container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <typography className={classes.heading} variant ="h2" align="center">Agraw</typography>
                <img className={classes.image} src={agraw} alt="agraw" height="60" width="40"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>


                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        <Form />
                        </Grid>


                    </Grid>
                </Container>
            </Grow>


        </container>
    );
}  

export default App;