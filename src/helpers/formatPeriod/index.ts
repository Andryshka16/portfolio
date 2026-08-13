const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const PRESENT = 'Present'

const SEPARATOR = ' - '

const splitPeriod = (period: string) => period.split(SEPARATOR)

const toMonths = (point: string) => {
    if (point === PRESENT) {
        const now = new Date()

        return now.getFullYear() * 12 + now.getMonth()
    }

    const [month, year] = point.split(' ')

    return Number(year) * 12 + MONTHS.indexOf(month)
}

const plural = (value: number, unit: string) => `${value} ${unit}${value === 1 ? '' : 's'}`

const getDuration = (period: string) => {
    const [start, end] = splitPeriod(period)

    const total = toMonths(end) - toMonths(start) + 1

    const years = Math.floor(total / 12)
    const months = total % 12

    return [years && plural(years, 'yr'), months && plural(months, 'mo')]
        .filter(Boolean)
        .join(' ')
}

const getYear = (point: string) => point.split(' ').at(-1) ?? point

const getYears = (period: string) => {
    const [start, end] = splitPeriod(period)

    return end ? `${getYear(start)}–${getYear(end)}` : getYear(start)
}

export { getDuration, getYears }
