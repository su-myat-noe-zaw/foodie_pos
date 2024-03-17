import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddonSlice } from "@/types/addon";

const initialState: AddonSlice = {
    items: [],
    isLoading: false,
    error: null
}


const addonSlice = createSlice({
    name: 'addon',
    initialState: initialState,
    reducers: {
        setAddons: (state,action)=>{
            state.items = action.payload
        }
    }
})

export const { setAddons } = addonSlice.actions

export default addonSlice.reducer