import { TableSlice } from "@/types/table";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState: TableSlice = {
    items: [],
    isLoading: false,
    error: null
}


const tableSlice = createSlice({
    name: 'table',
    initialState: initialState,
    reducers: {
        setTables: (state,action)=>{
            state.items = action.payload
        }
    }
})

export const { setTables } = tableSlice.actions

export default tableSlice.reducer