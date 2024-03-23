// slices/yourSlice.js
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Message} from "@/app/(home)/store/types";
import {detoxifyThunk} from "@/app/(home)/store/async-actions";


export const detoxifySlice = createSlice({
    name: 'detoxify',
    initialState: {
        messages: [] as Message[],
        pending: false,
    },
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(detoxifyThunk.pending, (state) => {
            state.pending = true
        })
        builder.addCase(detoxifyThunk.fulfilled, (state, action) => {
            state.pending = false
            state.messages.push({message: action.payload.detoxified_text, isCurrentUser: false})
        })
    },
})

export const {addMessage} = detoxifySlice.actions

export default detoxifySlice.reducer
