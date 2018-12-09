import React, { Component } from 'react';
import Hand from './Hand.js'


export default class Player extends Component {

  render(){
    return (<div class="player"><Hand /> <Hand /></div>)
  }
}
