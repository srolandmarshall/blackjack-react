// import React, {Component} from 'react'
// import Card from './Card.js'
//
// const suits = ["spade", "heart", "club", "diamond"]
// const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
//
// function populateDeck() {
//   let arr = []
//   suits.forEach(suit => {
//     values.forEach(val=>{
//     	arr.push(suit+"_"+val)
//     })
//   })
//   return arr
// }
//
// function shuffle(deck) {
//     for (let i = deck.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [deck[i], deck[j]] = [deck[j], deck[i]];
//     }
//     return deck;
// }
//
// var newDeck = shuffle(populateDeck())
//
// export default class Deck extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       deck: newDeck
//     }
//   }
//
//   dealCard = () => {
//     let dealingDeck = this.state.deck
//     let dealtCard = dealingDeck[0]
//     dealingDeck.shift()
//     this.setState({
//       deck: dealingDeck
//     })
//     return <Card front={"./cards/"+dealtCard+".png"}/>
//   }
//
// }
