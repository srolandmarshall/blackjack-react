import React, { Component } from 'react';
import Card from './Card.js'


export default class Player extends Component {

  constructor(props){
    super(props);
    this.state = {
      cards: [],
    }
  }

  componentDidMount(){
    console.log(this.props.cards)
    this.setState({
      cards: this.props.cards
    })
  }

  render(){
    return (<div className="player">
      {this.state.cards}
    </div>)
  }
}
