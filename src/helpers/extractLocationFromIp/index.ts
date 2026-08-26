const extractLocationFromIp = async (ip?: string) => {
    if (!ip) return undefined

    try {
        const response = await fetch(`https://ipinfo.io/${ip}/json`, {
            signal: AbortSignal.timeout(2500)
        })

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        return `${data.city}, ${data.country}`
    } catch (error) {
        console.error('Location lookup failed:', error)
        return undefined
    }
}

export { extractLocationFromIp }
