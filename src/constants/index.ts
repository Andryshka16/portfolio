import { Mail, Phone, MapPin } from '@lucide/astro'

const CONTACTS = [
    {
        name: 'Email',
        icon: Mail,
        value: 'contact@andryshka.com',
        href: 'mailto:contact@andryshka.com'
    },
    { name: 'Phone', icon: Phone, value: '+371 28176717', href: 'tel:+37128176717' },
    { name: 'Location', icon: MapPin, value: 'Riga, Latvia' }
]

export { CONTACTS }
