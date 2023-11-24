import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { roomsApi } from './rooms/roomsApi'
import { reserveApi } from './reserve/reserveApi'
import { availabilityApi } from './availability/availabilityApi'


export const store = configureStore({
  reducer: {
    [roomsApi.reducerPath]: roomsApi.reducer,
    [reserveApi.reducerPath]: reserveApi.reducer,
    [availabilityApi.reducerPath]: availabilityApi.reducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(roomsApi.middleware, reserveApi.middleware, availabilityApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch