import { combineReducers } from '@reduxjs/toolkit'
import { StreamOutputSlice } from '../slices'

export const rootReducer = combineReducers({
  streamoutput: StreamOutputSlice.reducer
});