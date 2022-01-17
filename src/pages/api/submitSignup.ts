import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../database'

export default async function submitSignup (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, username, password } = req.body

    const { data, error } = await supabase
      .from('account')
      .select(`
        username,
        email
      `)
      .eq('username', username)
      .eq('email', email)

    if (data.length > 0) {
      res.status(201).send('success!')
    } else {
      throw new Error('Username or email already taken!')
    }

  } catch (e: any) {
    res.status(500).send(e.message)
  }
}
