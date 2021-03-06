import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainNav from './Nav/MainNav';
import TeachersBoard from './Teachers/TeachersBoard';
import CardBoard from './Cards/components/CardBoard';
import MyCardBoard from './Cards/components/MyCardBoard';
import ScheduleBoard from './Schedule/ScheduleBoard';
import CardDetail from './Cards/components/CardDetail/CardDetail';
import styles from './App.styles';
import InfoTip from './InfoTips/components/InfoTip';


const App = ({ classes }) => (
  <Grid container spacing={0} className={classes.root}>
    <Grid item md={2} className={classes.nav}>
      <MainNav />
    </Grid>
    <Grid item md={10} className={classes.board}>
      <Switch>
        <Route path="/teachers" component={TeachersBoard} />
        <Route path="/cards/:id" component={CardDetail} />
        <Route path="/cards" component={CardBoard} />
        <Route path="/my-cards" component={MyCardBoard} />
        <Route path="/schedule" component={ScheduleBoard} />
      </Switch>
    </Grid>
    <InfoTip />
  </Grid>
);

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(App);

