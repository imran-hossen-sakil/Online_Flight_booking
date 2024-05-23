import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import instance from "../../../../axios"
import { formatedUser } from "../../../lib/formattedUser"


export const getAuthUser = createAsyncThunk(
    "user/getAuthUser",
    async () => {
        const response = await instance.post("/auth/verify")

        return response
    }
)



const initialState = {
    authUser: null,
    loading : false,
    error: null

}


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser : (state, action) => {
            state.authUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAuthUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAuthUser.fulfilled, (state, action) => {
                state.loading = false;
                state.authUser = formatedUser(action.payload?.data);
            })
            .addCase(getAuthUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            });
    },
})

export const {loginUser} = authSlice.actions
export default authSlice.reducer