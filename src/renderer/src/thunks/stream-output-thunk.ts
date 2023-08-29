import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserFilterInterface } from '../interfaces'
import { API } from '../api'

export const StreamOutputThunk = createAsyncThunk(
  'stream-output-thunk',
  async (filter: UserFilterInterface[], thunkApi: any) => {
    try {
      const response = await API.StreamOutput.list({ filter: filter })
      return response.data
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response)
    }
  }
)
