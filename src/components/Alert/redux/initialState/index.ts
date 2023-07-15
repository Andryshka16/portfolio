interface Alert {
    content: null | { name: string; text: string }
    type: null | string
    timeout: number
    showAlert: boolean
}

const initialState: Alert = {
    content: null,
    type: null,
    timeout: 2000,
    showAlert: false
}

export default initialState
