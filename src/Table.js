import React, {Component} from 'react'
import Dealer from './Dealer.js'
import Player from './Player.js'
import Card from './Card.js'
import Controls from './Controls.js'
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
let defaultDeck = populateDeck()

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function shuffleDefaultDeck(){
  return shuffle(defaultDeck)
}

class Table extends Component {

  constructor(props){
    super(props);
    this.state = {
      deck: shuffleDefaultDeck(),
      cardNum: 0
    }
    cardNumber = this.state.cardNum;
  }

  dealCardUp = () => {
    let retVal = <Card front={require('./cards/'+this.state.deck[cardNumber]+'.png')} down={false}/>
    cardNumber+=1
    return retVal
  }

  dealCardDown = () => {
    let retVal = <Card front={require('./cards/'+this.state.deck[cardNumber]+'.png')} down={true}/>
    cardNumber+=1
    return retVal
  }

  dealInitialCards = (dealer) => {
    let dealingDeck = this.state.deck
    let arr = []
    if (dealer){
        arr.push(this.dealCardDown())
        arr.push(this.dealCardUp())
      }
    else{
      for (var i = 2; i > 0; i--) {
        arr.push(this.dealCardUp())
      }
    }
    return arr
  }

  dealGame = () => {
    this.setState({
      deck: shuffleDefaultDeck()
    })
  }

  render() {
    return (
      <div>
        <Controls deal={this.dealGame} hit={this.handleHit} stand={this.handleStand}/>
        <div className="table">
          <Dealer cards={this.dealInitialCards(true)}/>
          <Player cards={this.dealInitialCards(false)}/>
        </div>
      </div>
  )
  }

  componentDidUpdate(){
    this.setState({
      cardNum: cardNumber
    })
  }

}
export default Table
