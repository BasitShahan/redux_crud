import { configureStore } from '@reduxjs/toolkit'
import  userdetail  from '../slice/Slices'


export const store = configureStore({
  reducer: {
  app:userdetail
  },
})