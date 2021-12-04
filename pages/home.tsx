import type { NextPage } from 'next'
import { useState } from 'react'
import axios from 'axios'

const HomeScreen: NextPage = () => {

    const [tickerSymbol, setTickerSymbol] = useState<string>('')

    const handleSubmit = async (e: HTMLFormElement<SubmitEvent>) => {
        e.preventDefault()
        try {
            const fetch = await axios.get('/api/fetchData')
            const response = await fetch.data
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter ticker symbol"
                    onChange={(e) => setTickerSymbol(e.target.value)}
                />
                <button type = "submit">Submit Ticker</button>
            </form>
        </div>
    )
}

export default HomeScreen