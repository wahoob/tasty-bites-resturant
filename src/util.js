import dayjs from 'dayjs'
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

export const getDates = (daysAfter) => {
    const startDay = dayjs().dayOfYear() + 1
    const endDay = startDay + daysAfter
    let dateArray = []
    for (let i = startDay; i < endDay; i++) {
        dateArray.push({ text: `${dayjs().dayOfYear(i).format('DD/MM/YYYY')}` })
    }
    return dateArray
}

export const getTimes = (startingHour, endingHour) => {
    let timeArray = []
    for (let i = startingHour; i <= endingHour; i++) {
        timeArray.push({ text: `${dayjs().hour(i).minute(0).second(0).format('h:mm A')}` })
    }
    return timeArray
}