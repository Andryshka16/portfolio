import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Language = 'EN' | 'LV' | 'RU'

const initialState = (localStorage.getItem('language') || 'EN') as Language

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (_, action: PayloadAction<Language>) => {
            localStorage.setItem('language', action.payload)
            return action.payload
        }
    }
})

export const { setLanguage } = languageSlice.actions
export default languageSlice
