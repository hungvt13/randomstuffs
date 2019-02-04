import React, {Component}  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import Button from '../Button/Button.js';
import frontImage from '../images/front-image.jpg';

import Fact from '../Facts/Fact';
import FactList from '../Facts/FactList';


const styles = theme => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '52%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class Panel extends Component {
  construtor(){
    this.handleGenerateClick = this.handleGenerateClick.bind(this);
    this.myFact = new FactList();

  }


  handleGenerateClick(){
    console.log('clicked');
    this.myFact.getFacts();
  }

  render(){
    const { classes} = this.props;
    return(
      <Card className={classes.card}>
        <CardHeader
          title="Welcome to Random Stuffs"
          subheader="created by Hung Tran"
        />
        <CardMedia
          className={classes.media}
          image={frontImage}
          title="Random photo"
        />
        <CardContent>
          <Typography component="p">
            A collections of facts and more from cat, dogs, maths, etc.
          </Typography>
          <Button label="Humour me!" color="primary" clickEvent={this.handleGenerateClick}/>
          <Fact topic="cat" factDetails="hellloooo"/>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Panel);
