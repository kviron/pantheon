import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { rtkApi } from '@/shared/api/rtkApi'

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      [rtkApi.reducerPath]: rtkApi.reducer
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  })
}
