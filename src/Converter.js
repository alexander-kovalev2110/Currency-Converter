import React, { Component } from 'react'

class Converter extends React.Component {       // Component with currency conversion
    state = {               // State of Currency Converter
        cur1: "USD",
        cur2: "UAH",
        val1: 0,
        val2: 0
    }

    rate = (cur1, cur2) => {                    // Calculation of the exchange rate at two cross rates
        const { USDUAH, USDEUR } = this.props
        switch (cur1) {
            case "USD": {
                switch (cur2) {
                    case "UAH": return USDUAH
                    case "EUR": return USDEUR
                    case "USD": return 1
                    default: return 1
                }
            }
            case "EUR": {
                switch (cur2) {
                    case "UAH": return USDUAH / USDEUR
                    case "EUR": return 1
                    case "USD": return 1 / USDEUR
                    default: return 1
                }
            }
            case "UAH": {
                switch (cur2) {
                    case "UAH": return 1
                    case "EUR": return USDEUR / USDUAH
                    case "USD": return 1 / USDUAH
                    default: return 1
                }
            }
        }
    }

    changeCur1 = (e) => {                   // Changing the first currency
        const { cur2, val1 } = this.state
        const { value} = e.target
        this.setState({cur1: value, val2: (val1 * this.rate(value, cur2)).toFixed(2)})
    }

    changeCur2 = (e) => {                   // Changing the second currency
        const { cur1, val1 } = this.state
        const { value} = e.target
        this.setState({cur2: value, val2: (val1 * this.rate(cur1, value)).toFixed(2)})
    }

    changeVal1 = (e) => {                   // Changing the number of units in the first currency
        const { cur1, cur2 } = this.state
        const { value} = e.target
        this.setState({val1: value, val2: (value * this.rate(cur1, cur2)).toFixed(2)})
    }

    changeVal2 = (e) => {                   // Changing the number of units in the second currency
        const { cur1, cur2 } = this.state
        const { value} = e.target
        this.setState({val2: value, val1: (value * this.rate(cur2, cur1)).toFixed(2)})
    }

    render () {                             // Currency conversion
        const { val1, val2} = this.state
        return (
            <div>
                <div>
                    <select className="form-select" onChange={this.changeCur1} >
                        <option value="USD">USD&nbsp;&nbsp;</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                    </select>
                    <input type="number" value={val1} onChange={this.changeVal1} step={0.01} />
                </div>

                <div>
                    <select className="form-select" onChange={this.changeCur2} >
                        <option value="UAH">UAH&nbsp;&nbsp;</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                    <input type="number" value={val2} onChange={this.changeVal2} step={0.01} />
                </div>
            </div>
        )
    }
}

export default Converter

