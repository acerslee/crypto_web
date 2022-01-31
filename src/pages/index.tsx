import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '../ui/Button/'

const Home: NextPage = () => {

  return (
    <main>
      <Link href={'/login'} passHref>
        <Button
          size='large'
          type='primary'
          label='Login'
        />
      </Link>
      <Link href={'/signup'} passHref>
        <Button
            size='large'
            type='primary'
            label='Signup'
          />
      </Link>
      <Link href={'/home'} passHref>
        <Button
            size='large'
            type='primary'
            label='Continue as Guest'
          />
      </Link>
    </main>
  )
}

export default Home
