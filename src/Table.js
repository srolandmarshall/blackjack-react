import React, {Component} from 'react'
import Dealer from './Dealer.js'
import Player from './Player.js'
import './index.css'

class Table extends Component {

  render() {
    return (<div class="table">
      <Dealer />
      <Player />
    </div>)
  }

}
export default Table
