import { PayloadAction, SliceCaseReducers, createSlice } from '@reduxjs/toolkit'

type Language = 'EN' | 'LV' | 'RU'

const languageSlice = createSlice<Language, SliceCaseReducers<Language>>({
    name: 'language',
    initialState: 'EN',
    reducers: {
        setLanguage: (_, action: PayloadAction<'EN' | 'LV' | 'RU'>) => action.payload
    }
})

export default languageSlice
