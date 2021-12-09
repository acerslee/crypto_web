import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function submitSignup (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, username, password } = req.body

    res.status(201).send('success')
  } catch (e) {
    res.status(500).send(e)
  }
}
