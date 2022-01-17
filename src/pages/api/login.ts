import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../database'

export default async function login (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { username, password } = req.body

    const { data, error } = await supabase
      .from('account')
      .select(`
        username,
        password
      `)
      .eq('username', username)
      .eq('password', password)

    res.status(201).send('success!')
    // } else {
    //   throw new Error('Username or email already taken!')
    // }

  } catch (e: any) {
    res.status(500).send(e.message)
  }
}
