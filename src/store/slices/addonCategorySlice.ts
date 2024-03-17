import { AddonCategorySlice } from "@/types/addonCategory";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: AddonCategorySlice = {
    items: [],
    isLoading: false,
    error: null
}


const addonCategorySlice = createSlice({
    name: 'addonCategory',
    initialState: initialState,
    reducers: {
        setAddonCategories: (state,action)=>{
            state.items = action.payload
        }
    }
})

export const { setAddonCategories } = addonCategorySlice.actions

export default addonCategorySlice.reducer