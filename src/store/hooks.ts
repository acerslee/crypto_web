import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type Ticker = {
  id?: number;
  ticker: string;
}

type TickerList = {
  tickers: Ticker[];
}

const initialState: TickerList = {
  tickers: [],
}

const slice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    getTickers: (state, action: PayloadAction<Ticker[]>) => {
      state.tickers = action.payload;
    },
    addNewTicker: (state, action: PayloadAction<Ticker>) => {
      state.tickers = [...state.tickers, action.payload]
    },
    deleteTicker: (state, action: PayloadAction<Ticker>) => {
      state.tickers = state.tickers.filter((task: any) => task.id !== action.payload)
    },
  }
})

export default slice.reducer

const { getTickers,
        addNewTicker,
        deleteTicker,
      } = slice.actions;

export const getTickersState = () => async (dispatch: Function) => {
  try {
    const response = await axios.get('/api/getTickers');
    dispatch(getTickers(response.data))
  } catch (e) {
    return console.error(e)

  }
}

// export const addTaskState = (title: string, timeBox: string) => async (dispatch: any) => {
//   try {
//     const response = await axios.post('/api/addTask', { title, timeBox});
//     dispatch(addNewTask(response.data))
//   } catch (err) {
//     return console.error(err)
//   }
// };

// export const deleteTaskState = (id: Number) => async (dispatch: any) => {
//   try {
//     const response = await axios.delete(`/api/deleteTask/?id=${id}`)
//     dispatch(deleteTask(response.data))
//   } catch (err) {
//     return console.error(err)
//   }
// }

// export const updateTimeBoxState = (id: Number, timeBox: string) => async (dispatch: any) => {
//   try {
//     const response = await axios.put(`/api/editTask?id=${id}`, { timeBox })
//     dispatch(updateTimeBox(response.data))
//   } catch (err) {
//     return console.error(err)
//   }
// };