import React, {Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async () => {
   const rts = await api.get('/products')

   console.log(rts);
  };

  render() {
    return <h1></h1>
  }
}