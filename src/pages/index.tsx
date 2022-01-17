import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <main>
      <div className = {styles.buttonsContainer}>
        <Link href = '/login' passHref>
          <button className = {styles.button}>
            Login
          </button>
        </Link>
        <Link href = '/signup' passHref>
          <button className = {styles.button}>
              Sign Up
          </button>
        </Link>
        <Link href = '/home' passHref>
          <button className = {styles.button}>
            Continue as Guest
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Home
