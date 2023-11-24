import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { roomsApi } from './rooms/roomsApi'


export const store = configureStore({
  reducer: {
    [roomsApi.reducerPath]: roomsApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(roomsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch