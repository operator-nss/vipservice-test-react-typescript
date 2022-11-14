import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


const initialState = {

}

const aviaInfoSlice = createSlice({
    name: 'aviaInfo',
    initialState,
    reducers: {
        // setItems(state, action:PayloadAction<Pizza[]>) {
        //     state.items = action.payload;
        // },
    },
})


export const {} = aviaInfoSlice.actions;

export default aviaInfoSlice.reducer;