import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getSearchFlights = createAsyncThunk("flight/getSearchFlights", async (obj_data) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/flight/search?from=${obj_data?.from}&to=${obj_data?.to}&date=${obj_data?.date}&pessanger=${obj_data?.pessanger}`)

    return await response.json()
})


const initialState = {
    error: null,
    loading: false,
    flights: [],
 
}

const flightSlice = createSlice({
    name: "flight",
    initialState,
    reducers: {
        flight_add_by_search: (state, action) => {
            state.flights = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
          .addCase(getSearchFlights.pending, (state) => {
            state.loading = true;
          })
          .addCase(getSearchFlights.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action);
            state.flights = action.payload;
          })
          .addCase(getSearchFlights.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})



export const {flight_add_by_search} = flightSlice.actions
export default flightSlice.reducer


