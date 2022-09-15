import React, { Component } from 'react'
import Header from './Header'
import Converter from './Converter'
import axios from 'axios'

const url = "https://cdn.cur.su/api/nbu.json"   // Site with exchange rates for today

class App extends React.Component {
  state = {                   // Cross exchange rates against USD
    USDUAH: 1,
    USDEUR: 1
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {          // Loading exchange rates
    axios(url)
        .then((res) => {
          const rates = res.data.rates            // Cross Exchange rates against USD
          this.setState({USDUAH: rates.UAH, USDEUR: rates.EUR})
        })
        .catch((err) => {
          console.log(err)
        })
  }

  render() {
    const { USDUAH, USDEUR } = this.state
    return (
        <div>
          <Header USDUAH={USDUAH} USDEUR={USDEUR} />
          <hr/>
          <Converter USDUAH={USDUAH} USDEUR={USDEUR} />
        </div>
    )
  }
}

export default App
