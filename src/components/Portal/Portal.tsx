import { createPortal } from 'react-dom'
import { ReactNode } from 'react'

interface PortalProps {
    children: ReactNode
}

const portal = document.getElementById('portal')!

const Portal = ({ children }: PortalProps) => createPortal(children, portal)

export default Portal
