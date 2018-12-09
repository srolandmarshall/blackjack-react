import React, { Component } from 'react';
import Hand from './Hand.js'


export default class Dealer extends Component {

  render(){
    return (<div class="dealer"><Hand /> <Hand /></div>)
  }
}
