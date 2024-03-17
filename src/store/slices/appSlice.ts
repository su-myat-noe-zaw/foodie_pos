import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "@/utils/config";
import { AppSlice, GetAppOptions } from "@/types/app";
import { setLocations } from "./locationSlice";
import { setMenus } from "./menuSlice";
import { setMenuCategories } from "./menuCategorySlice";
import { setAddonCategories } from "./addonCategorySlice";
import { setAddons } from "./addonSlice";
import { setTables } from "./tableSlice";

const initialState: AppSlice = {
    init: false,
    isLoading: false,
    error: null
}

export const getAppData = createAsyncThunk(
    "app/getAppData",
    async (options: GetAppOptions, thunkApi)=>{
        const { onSuccess, onError } = options;
        try{
            const response = await fetch(`${config.apiBaseUrl}/app`)
            const appData = await response.json()
            const {
                locations,
                menuCategories,
                menus,
                addonCategories,
                addons,
                tables
            } = appData;
            thunkApi.dispatch(setInit(true))
            thunkApi.dispatch(setLocations(locations))
            thunkApi.dispatch(setMenus(menus))
            thunkApi.dispatch(setMenuCategories(menuCategories))
            thunkApi.dispatch(setAddonCategories(addonCategories))
            thunkApi.dispatch(setAddons(addons))
            thunkApi.dispatch(setTables(tables))
            onSuccess && onSuccess()
        }catch(err){
            onError && onError()
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        setInit: (state,action)=>{
            state.init = action.payload
        }
    }
})

export const { setInit } = appSlice.actions

export default appSlice.reducer