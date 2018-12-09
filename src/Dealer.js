import React, { Component } from 'react';
import Card from './Card.js'


export default class Dealer extends Component {

  render(){
    return (<div className="dealer"><Card down="true" /><Card down="false" /></div>)
  }
}
