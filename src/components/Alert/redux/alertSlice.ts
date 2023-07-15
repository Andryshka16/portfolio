import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

interface AlertPayload {
    content: null | { name: string; text: string }
    type: 'error' | 'success'
}

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action: PayloadAction<AlertPayload>) => {
            const { content, type } = action.payload
            state.content = content
            state.type = type
            state.showAlert = true
        },
        hideAlert: (state) => {
            state.showAlert = false
        }
    }
})

export default alertSlice
