import { useEffect } from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from 'redux/store'
import { hideAlert } from './redux/actions'
import { Portal } from 'components'

const Alert = () => {
    const dispatch = useAppDispatch()
    const { content, type, timeout, showAlert } = useAppSelector((store) => store.alert)

    useEffect(() => {
        const hideTimeout = setTimeout(() => dispatch(hideAlert()), timeout)
        return () => clearTimeout(hideTimeout)
    }, [showAlert])

    const hideStyle = !showAlert ? 'translate-x-10 opacity-0' : ''
    const bgColor =
        type === 'success'
            ? 'from-[#00ff0040] bg-gradient-to-r to-transparent'
            : 'from-[#ff000040] bg-gradient-to-r to-transparent'

    const nameColor =
        type === 'success' ? 'text-green-600 dark:text-green-500' : 'text-red-500 dark:text-red-500'

    return (
        <Portal>
            <div
                className={`fixed bottom-10 right-20 overflow-hidden rounded-xl bg-gray-200 transition duration-200 dark:bg-[#172642] ${hideStyle}`}
            >
                <div className={`absolute h-full w-1/2 ${bgColor}`} />

                <div className='flex items-center gap-7 px-10 py-3'>
                    {type === 'success' ? (
                        <IoCheckmarkCircle
                            className='text-green-600 dark:text-green-500'
                            size={30}
                        />
                    ) : (
                        <AiFillCloseCircle className='text-red-500' size={30} />
                    )}
                    <div>
                        <p className={`font-semibold ${nameColor}`}>{content?.name}</p>
                        <p className='text-zinc-500 dark:text-slate-400'>{content?.text}</p>
                    </div>
                </div>
            </div>
        </Portal>
    )
}
export default Alert
