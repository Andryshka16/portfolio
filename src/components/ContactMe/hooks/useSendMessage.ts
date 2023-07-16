import { showAlert } from 'components/Alert/redux/actions'
import { send } from 'emailjs-com'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/store'
import content from '../content.json'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE
const USER_KEY = import.meta.env.VITE_EMAILJS_USER_KEY

type FormFields = {
    name: string
    email: string
    message: string
}

const useSendMessage = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector((store) => store.language)
    const [loading, setLoading] = useState(false)
    const { messageSent, messageError } = content[language].alert

    const sendMessage = async (data: FormFields) => {
        try {
            setLoading(true)
            await send(SERVICE, TEMPLATE, data, USER_KEY)
            setLoading(false)
            dispatch(showAlert({ content: messageSent, type: 'success' }))
        } catch (error) {
            setLoading(false)
            dispatch(showAlert({ content: messageError, type: 'error' }))
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage
