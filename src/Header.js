import React from 'react'

const  Header = (props) => {                    // Header with exchange rates
    const { USDUAH, USDEUR } = props
    return (
        <h3>USD&nbsp;&nbsp; <i>{USDUAH}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            EUR&nbsp;&nbsp; <i>{(USDUAH/USDEUR).toFixed(4)}</i></h3>
    )
}

export default Header
