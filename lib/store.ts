import { configureStore } from '@reduxjs/toolkit'
import AppApi from './AppApi'

export const makeStore = () => {
  return configureStore({
    reducer: {
        [AppApi.reducerPath]:AppApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
          .concat(AppApi.middleware),
  })
}


export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']