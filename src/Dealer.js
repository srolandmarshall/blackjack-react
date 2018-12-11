import React, { Component } from 'react';
import Card from './Card.js'


export default class Dealer extends Component {

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
    return (<div className="dealer">
      {this.state.cards}
    </div>)
  }
}
