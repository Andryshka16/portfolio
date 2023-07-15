import { useForm } from 'react-hook-form'
import { useSendMessage } from '../hooks'
import { useAppSelector } from 'redux/store'
import content from '../content.json'

type FormFields = {
    name: string
    email: string
    message: string
}

const inputs: (keyof FormFields)[] = ['name', 'email', 'message']

const ContactForm = () => {
    const language = useAppSelector((store) => store.language)
    const { loading, sendMessage } = useSendMessage()
    const { register, handleSubmit, reset } = useForm<FormFields>()

    const { title, placeHolders, button } = content[language]

    const submit = async (data: FormFields) => {
        await sendMessage(data)
        reset()
    }

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className='flex w-[700px] flex-col rounded-3xl bg-[#2A2A67] px-24 pb-10 pt-9'
        >
            <h1 className='mb-2 text-center text-5xl font-bold text-[#05CEC2]'>{title}</h1>

            {inputs.map((name) => (
                <input
                    {...register(name)}
                    placeholder={placeHolders[name]}
                    className='my-6 block w-full border-b-2 border-b-[#05CEC2] bg-[#2A2A67] p-2 text-xl font-medium text-white focus:outline-none'
                    key={name}
                />
            ))}

            <button
                type='submit'
                className={`mt-6 w-full rounded-md bg-[#05CEC2] py-1 text-xl font-bold text-[#2A2A67] transition duration-200 ${
                    loading ? 'pointer-events-none bg-opacity-70' : 'hover:bg-opacity-70'
                }`}
            >
                {button}
            </button>
        </form>
    )
}

export default ContactForm
