import React, { Component } from 'react';
import Card from './Card.js'


export default class Player extends Component {

  render(){
    return (<div className="player"><Card down={false} /><Card down={false} /></div>)
  }
}
