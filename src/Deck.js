import React, { Component } from 'react';

const suits = ["spade", "heart", "club", "diamond"]
const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
let newDeck = populateDeck()

function populateDeck() {
  arr = []
  suits.forEach(suit => {
    values.forEach(val=>{
    	arr.push(suit+"_"+val)
    })
  })
  return arr
}
