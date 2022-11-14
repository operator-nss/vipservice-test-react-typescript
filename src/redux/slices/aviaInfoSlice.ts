import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
  from: '',
  to: '',
  dateFrom: '',
  dateTo: ''
}

const aviaInfoSlice = createSlice({
  name: 'avia',
  initialState,
  reducers: {
    setFrom(state, action: PayloadAction<string>) {
      state.from = action.payload;
    },
    setTo(state, action: PayloadAction<string>) {
      state.to = action.payload;
    },
    setDateFrom(state, action: PayloadAction<string>) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action: PayloadAction<string>) {
      state.dateTo = action.payload;
    },
    clearDates(state) {
      state.from = '';
      state.to = '';
      state.dateFrom = '';
      state.dateTo = '';
    }
  },
})


export const {setFrom, setTo, setDateFrom, setDateTo, clearDates} = aviaInfoSlice.actions;

export default aviaInfoSlice.reducer;