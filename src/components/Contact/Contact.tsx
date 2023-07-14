import { useForm } from 'react-hook-form'
import Socials from './components/Socials/Socials'

type FormFields = {
    name: string
    email: string
    message: string
}

const Contact = () => {
    const { register, handleSubmit, reset } = useForm<FormFields>()

    const submit = (data: FormFields) => {
        console.log(data)
        reset()
    }

    return (
        <div className='m-auto mt-36 w-fit' id='contact'>
            <form
                onSubmit={handleSubmit(submit)}
                className='flex w-[700px] flex-col rounded-3xl bg-[#2A2A67] px-24 pb-10 pt-9'
            >
                <h1 className='mb-2 text-center text-5xl font-bold text-[#05CEC2]'>Contact me</h1>
                <input
                    {...register('name')}
                    placeholder='Your name'
                    className='font-medium my-6 block w-full border-b-2 border-b-[#05CEC2] bg-[#2A2A67] p-2 text-xl text-white focus:outline-none'
                />
                <input
                    {...register('email')}
                    placeholder='Your email'
                    className='font-medium my-6 block w-full border-b-2 border-b-[#05CEC2] bg-[#2A2A67] p-2 text-xl text-white focus:outline-none'
                />
                <input
                    {...register('message')}
                    placeholder='Your message'
                    className='font-medium my-6 block w-full border-b-2 border-b-[#05CEC2] bg-[#2A2A67] p-2 text-xl text-white focus:outline-none'
                />
                <button
                    type='submit'
                    className='mt-6 w-full rounded-md bg-[#05CEC2] py-1 text-xl font-bold text-[#2A2A67] transition duration-200 hover:bg-opacity-80'
                >
                    Send
                </button>
            </form>
            <Socials />
        </div>
    )
}

export default Contact
