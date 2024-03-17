import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationSlice } from "@/types/location";

const initialState: LocationSlice = {
    items: [],
    isLoading: false,
    error: null
}


const locationSlice = createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        setLocations: (state,action)=>{
            state.items = action.payload
        }
    }
})

export const { setLocations } = locationSlice.actions

export default locationSlice.reducer