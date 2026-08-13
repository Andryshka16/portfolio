import type { Message } from '@/types'

const escapeMarkdownV2 = (text: string) => text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&')

const escapeCode = (text: string) => text.replace(/[`\\]/g, '\\$&')

const formatTelegramMessage = (message: Message) => {
    const { ip, location } = message

    const name = escapeMarkdownV2(message.name)
    const email = escapeMarkdownV2(message.email)
    const subject = escapeMarkdownV2(message.subject)
    const content = escapeMarkdownV2(message.message)

    let info = ''

    if (location) info += `\n\n🌍 *Location:* ${escapeMarkdownV2(location)}`

    if (ip) {
        const code = `🌐 *IP:* \`${escapeCode(ip)}\``

        info += location ? `\n${code}` : `\n\n${code}`
    }

    return `✨ *New Message*

👤 *${name}*
📧 ${email}
📝 ${subject} ${info}

💬 *Message:*
${content}
`
}

export { formatTelegramMessage }
