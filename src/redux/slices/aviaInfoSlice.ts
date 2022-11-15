import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Istate {
  from: string
  to: string
  dateFrom: string
  dateTo: string
  searchValue: string
}

const initialState: Istate = {
  from: '',
  to: '',
  dateFrom: '',
  dateTo: '',
  searchValue: ''
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    clearDates(state) {
      state.from = '';
      state.to = '';
      state.dateFrom = '';
      state.dateTo = '';
      state.searchValue = '';
    }
  },
})


export const {setFrom, setTo, setDateFrom, setDateTo, clearDates, setSearchValue} = aviaInfoSlice.actions;

export default aviaInfoSlice.reducer;