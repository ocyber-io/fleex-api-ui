import { createSlice } from '@reduxjs/toolkit'
import { UserInterface } from '../interfaces'
import { StreamOutputThunk } from '../thunks'

interface StreamOutputState {
  data: UserInterface[]
  loading: boolean
  error: any
}

const initialState: StreamOutputState = {
  data: [],
  loading: false,
  error: null
}

export const StreamOutputSlice = createSlice({
  name: 'stream-output-slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Streams
    builder
      .addCase(StreamOutputThunk.pending, (state) => {
        state.loading = !state.data.length
        state.error = null
      })
      .addCase(StreamOutputThunk.fulfilled, (state, { payload }) => {
        if (payload) {
          if (payload.length) {
            if (payload[0].user) {
              state.data = payload[0].user.filter((item) => !item.deleted)
            }
          }
        }
        state.loading = false
        state.error = null
      })
      .addCase(StreamOutputThunk.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload
        } else {
          state.error = action.error
        }
        state.loading = false
      })
  }
})
