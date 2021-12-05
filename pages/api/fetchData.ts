import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function fetchData (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { tickerSymbol } = req.body
    const capTickerSymbol = tickerSymbol.toUpperCase()

    const data = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${capTickerSymbol}/range/1/day/2020-06-01/2020-06-17?apiKey=${process.env.KEY}`)
    const response = await data.data

    res.send(response)
  } catch (e) {
    res.status(500).send(e)
  }
}
