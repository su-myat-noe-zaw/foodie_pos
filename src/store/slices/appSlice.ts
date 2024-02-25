import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "@/utils/config";
import { AppSlice, GetAppOptions } from "@/types/app";

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
            console.log(appData)
            thunkApi.dispatch(setInit(true))
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