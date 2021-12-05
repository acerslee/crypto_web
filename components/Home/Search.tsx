import { FormEvent, useState, useRef} from 'react'
import axios from 'axios'
// import { } put in search mag glass icon here

const Search = () => {

    const [tickerSymbol, setTickerSymbol] = useState<string>('')

    const inputRef = useRef<string>('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const fetch = await axios.post('/api/fetchData', {tickerSymbol})
            const response = await fetch.data
            console.log(response)
            inputRef.current.clear()
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Enter ticker symbol"
                    onChange={(e: FormEvent<HTMLInputElement>): void => setTickerSymbol(e.currentTarget.value)}
                />
                <button type = "submit">Submit Ticker</button>
            </form>
        </section>
    )
}

export default Search
