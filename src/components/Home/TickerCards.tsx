import React from "react"
import { getTickersState } from "../../store/hooks"
import { connect } from 'react-redux'

interface Props {
    getTickersState: () => void
}

const TickerCards: React.FC<Props> = () => {

    return(
        <section>

        </section>
    )
}

export default connect(null, { getTickersState })(TickerCards)
