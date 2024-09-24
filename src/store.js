import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './components/CartSlice'

export default configureStore({
  reducer: {
    cartManagement: CartSlice,
  },
})