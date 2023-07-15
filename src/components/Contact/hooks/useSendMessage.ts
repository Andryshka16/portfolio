import { showAlert } from 'components/Alert/redux/actions'
import { send } from 'emailjs-com'
import { useState } from 'react'
import { useAppDispatch } from 'redux/store'

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
    const [loading, setLoading] = useState(false)

    const sendMessage = async (data: FormFields) => {
        try {
            setLoading(true)

            await send(SERVICE, TEMPLATE, data, USER_KEY)

            const content = { name: 'Message sent!', text: 'Your message has been sent' }
            dispatch(showAlert({ content, type: 'success' }))

            setLoading(false)
        } catch (error) {
            setLoading(false)
            const content = { name: 'Error!', text: 'Failed to send message' }
            dispatch(showAlert({ content, type: 'error' }))
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage
