import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Panel from './Panel/Panel';
import Grid from '@material-ui/core/Grid';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar name="Random Stuffs"/>\
        <div>
          <Grid container spacing={8} direction="row" justify="center" alignItems="center" style={{ minHeight: '80vh' }}>
              <Grid item xs={12} md={4} ld={4}>
                  <Panel/>
              </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
