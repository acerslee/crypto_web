import { configureStore } from '@reduxjs/toolkit'
import tickers from './hooks'

export const store = configureStore({
  reducer: {
    tickers
  }
})