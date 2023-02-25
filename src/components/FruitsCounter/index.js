// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  banana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="image"
              />
              <button type="button" className="button" onClick={this.mango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="image"
              />
              <button type="button" className="button" onClick={this.banana}>
                Eat banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
