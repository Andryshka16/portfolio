const sendTelegramMessage = async (message: string) => {
    const BOT_TOKEN = import.meta.env.BOT_TOKEN
    const CHAT_ID = import.meta.env.CHAT_ID

    if (!import.meta.env.PROD) {
        return await new Promise((resolve) => setTimeout(resolve, 500))
    }

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'MarkdownV2',
            disable_web_page_preview: true
        })
    })

    if (!response.ok) {
        throw new Error(`Telegram API error: ${response.status}`)
    }

    return response.json()
}

export { sendTelegramMessage }
