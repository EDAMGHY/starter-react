import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "@/redux/store"

interface CounterState {
  value: number
  data: string | null
  loading: boolean
  error: string | null
}

const initialState: CounterState = {
  value: 0,
  data: null,
  loading: false,
  error: null,
}

// Async thunk for fetching data
export const fetchData = createAsyncThunk<string, void, { state: RootState }>(
  "counter/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://randomuser.me/api?results=10")
      const data = await response.json()
      return data
    } catch (error) {
      return rejectWithValue((error as { message?: string })?.message)
    }
  },
)

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
  },
  extraReducers: builder => {
    // Handling the pending, fulfilled, and rejected states for fetchData
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchData.rejected, (state, action) => {
        // Use rejectWithValue to set the type of the payload explicitly
        state.loading = false
        state.error = action.payload as string // Set the type explicitly
      })
  },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
