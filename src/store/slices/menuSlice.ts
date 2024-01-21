import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetMenusOptions, MenuSlice } from "@/types/menu";
import { config } from "@/utils/config";

const initialState: MenuSlice = {
    items: [],
    isLoading: false,
    error: null
}

export const getMenus = createAsyncThunk(
    "menu/getMenus",
    async (options: GetMenusOptions, thunkApi)=>{
        const { locationId, onSuccess, onError } = options;
        try{
            const response = await fetch(`${config.apiBaseUrl}/menu?locationId=${options.locationId}`)
            const menu = response.json()
            thunkApi.dispatch(setMenus(menu))
            onSuccess && onSuccess()
        }catch(err){
            onError && onError()
        }
    }
)

const menuSlice = createSlice({
    name: 'menu',
    initialState: initialState,
    reducers: {
        setMenus: (state,action)=>{
            state.items = action.payload
        }
    }
})

export const { setMenus } = menuSlice.actions

export default menuSlice.reducer