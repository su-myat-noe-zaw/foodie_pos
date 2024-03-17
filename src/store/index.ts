import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './slices/menuSlice'
import menuCategoryReducer from './slices/menuCategorySlice'
import appReducer from './slices/appSlice'
import locationReducer from './slices/locationSlice'
import addonReducer from './slices/addonSlice'
import addonCategoryReducer from './slices/addonCategorySlice'
import tableReducer from './slices/tableSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    location: locationReducer,
    menuCategory: menuCategoryReducer,
    menu: menuReducer,
    addon: addonReducer,
    addonCategory: addonCategoryReducer,
    table: tableReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch