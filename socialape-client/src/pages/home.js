import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/Scream';
import Profile from '../components/Profile';

class home extends Component {
  state = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get('/screams')
      .then(res => {
        this.setState({ screams: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream => (
        <Scream scream={scream} key={scream.screamId} />
      ))
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Grid container spacing={5}>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Profile></Profile>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
