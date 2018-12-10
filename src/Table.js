import React, {Component} from 'react'
import Dealer from './Dealer.js'
import Player from './Player.js'
import Card from './Card.js'
import './index.css'

const suits = ["spade", "heart", "club", "diamond"]
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
let cardNumber = 0;
function populateDeck() {
  let arr = []
  suits.forEach(suit => {
    values.forEach(val=>{
    	arr.push(suit+"_"+val)
    })
  })
  return arr
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

var newDeck = shuffle(populateDeck())

class Table extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: newDeck,
      cardNum: 0
    }
    cardNumber = this.state.cardNum;
  }

  dealCard = () => {
    let dealingDeck = this.state.deck
    let dealtCard = dealingDeck[cardNumber]
    cardNumber+=1
    return require('./cards/'+dealtCard+'.png')
  }

  render() {
    return (<div className="table">
      <div className="dealer"><Card front={this.dealCard()} down={true} /><Card front={this.dealCard()} down={false} /></div>
      <div className="player"><Card front={this.dealCard()} down={false} /><Card front={this.dealCard()} down={false} /></div>
    </div>)
  }

  componentDidUpdate(){
    this.setState({
      cardNum: cardNumber
    })
  }

}
export default Table
