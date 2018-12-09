import React, { Component } from 'react';

export default class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      front: require('./cards/club_1.png'),
      back: require('./cards/back.png'),
      down: true,
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      down: !this.state.down
    })
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.value)
    this.setState({
      down: nextProps.value
    })
  }

  render(){
    if(this.state.down){
      return <img src={this.state.back} className="card" alt="cardback" onClick={this.handleClick}/>
    }
    else{
      return <img src={this.state.front} className="card" alt="cardfront" onClick={this.handleClick}/>
    }
  }

}
