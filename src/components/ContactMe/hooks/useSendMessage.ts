import { useState } from 'react'
import { send } from 'emailjs-com'

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE
const USER_KEY = import.meta.env.VITE_EMAILJS_USER_KEY

const useSendMessage = <T extends Record<string, unknown>>() => {
    const [loading, setLoading] = useState(false)

    const sendMessage = async (data: T) => {
        try {
            setLoading(true)
            await send(SERVICE, TEMPLATE, data, USER_KEY)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            throw error
        }
    }

    return { loading, sendMessage }
}

export default useSendMessage
