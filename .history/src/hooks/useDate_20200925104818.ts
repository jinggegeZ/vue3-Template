import dayjs from "dayjs"
import {onMounted, onUnmounted, ref} from "vue"

export const useDate = () => {
    let date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    let timer:any = null
    onMounted(() => {
        timer = setInterval(() => {
            date.value =dayjs().format('YYYY-MM-DD HH:mm:ss')
        },1000)
    })
    onUnmounted(() => {
        clearInterval(timer)
    })
    return {
        date
    }
}