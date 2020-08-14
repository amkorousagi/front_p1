import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
//import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

class CustomerListView extends Component {
  classes = useStyles();
  
  customers = []
  
  //console.log("hello")
  componentWillMount = () => {
    fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response => console.log("1",response.data))
  }
  //console.log("print")
  //console.log("2",customers)
  customers = customers.map(
   customer => {
    return{
      id: uuid(),
      rank: customer.rank,
      keyword: customer.keyword,
      gender: customer.gender,
      date_: customer.date_,
      score: customer.score
    } 
    
   }
  );
  
  return (
    /*
    
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          
          <Results customers={customers} />
          
        </Box>
      </Container>
    </Page>
    */
  );
};

export default CustomerListView;
