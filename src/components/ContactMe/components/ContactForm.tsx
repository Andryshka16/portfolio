import { RegisterOptions, useForm } from 'react-hook-form'
import { useSendMessage } from '../hooks'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { showAlert } from 'components/Alert/redux/actions'
import content from '../content.json'

type FormFields = {
    name: string
    email: string
    message: string
}

interface Input {
    name: keyof FormFields
    options: RegisterOptions
}

const inputs: Input[] = [
    { name: 'name', options: { required: true, minLength: 3 } },
    { name: 'email', options: { required: true, pattern: /^\S+@\S+$/i } },
    { name: 'message', options: { required: true } }
]

const ContactForm = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector((store) => store.language)
    const { loading, sendMessage } = useSendMessage<FormFields>()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormFields>({ mode: 'onBlur' })

    const { title, placeHolders, button, alert } = content[language]
    const { messageSent, messageError } = alert

    const submit = async (data: FormFields) => {
        try {
            await sendMessage(data)
            dispatch(showAlert({ content: messageSent, type: 'success' }))
            reset()
        } catch (error) {
            dispatch(showAlert({ content: messageError, type: 'error' }))
        }
    }

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className='flex w-[700px] flex-col rounded-3xl bg-zinc-200 px-24 pb-10 pt-9 dark:bg-[#2A2A67]'
        >
            <h1 className='mb-2 text-center text-5xl font-bold text-zinc-700 dark:text-teal-400'>
                {title}
            </h1>

            {inputs.map(({ name, options }) => (
                <div className='relative'>
                    <input
                        {...register(name, options)}
                        placeholder={placeHolders[name]}
                        className={`my-6 block w-full border-b-2 bg-transparent p-2 text-xl font-medium text-zinc-800 transition duration-200 focus:outline-none dark:text-white ${
                            errors[name]
                                ? 'border-b-red-400 dark:border-b-red-500'
                                : ' border-b-zinc-400 dark:border-b-[#05CEC2]'
                        }`}
                        key={name}
                    />
                </div>
            ))}

            <button
                type='submit'
                className={`mt-6 w-full rounded-md bg-red-400 py-1 text-xl font-bold text-zinc-100 transition duration-200 dark:bg-[#05CEC2] dark:text-[#2A2A67] ${
                    loading ? 'pointer-events-none bg-opacity-70' : 'hover:bg-opacity-70'
                }`}
            >
                {button}
            </button>
        </form>
    )
}

export default ContactForm
