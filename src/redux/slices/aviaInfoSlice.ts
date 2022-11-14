import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    from: '',
    to: '',
    dateFrom: '',
    dateTo: ''
}

const aviaInfoSlice = createSlice({
    name: 'aviaInfo',
    initialState,
    reducers: {
        setFrom(state, action:PayloadAction<string>) {
            state.from = action.payload;
        },
        setTo(state, action:PayloadAction<string>) {
            state.to = action.payload;
        },
        setDateFrom(state, action:PayloadAction<string>) {
            state.dateFrom = action.payload;
        },
        setDateTo(state, action:PayloadAction<string>) {
            state.dateTo = action.payload;
        },
    },
})


export const {setFrom, setTo, setDateFrom, setDateTo} = aviaInfoSlice.actions;

export default aviaInfoSlice.reducer;