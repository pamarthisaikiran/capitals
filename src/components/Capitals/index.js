import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    showCaptialId: countryAndCapitalsList[0].id,
  }

  changeCaptial = event => this.setState({showCaptialId: event.target.value})

  showCaptial = () => {
    const {showCaptialId} = this.state
    const displayCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === showCaptialId,
    )

    return displayCountry.country
  }

  render() {
    const {showCaptialId} = this.state
    const country = this.showCaptial(showCaptialId)
    return (
      <div className="bg">
        <div className="card">
          <h1>Countries And Capitals</h1>
          <div className="select">
            <select className="capital-select" onChange={this.changeCaptial}>
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para1">is Capital of Which Country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
