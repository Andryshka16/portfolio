import languageSlice from 'components/Navbar/shared/Controls/LanguageSelector/redux/languageSlice'
import alertSlice from 'components/Alert/redux/alertSlice'

const alert = alertSlice.reducer
const language = languageSlice.reducer

export { alert, language }
