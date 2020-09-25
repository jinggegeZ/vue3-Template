import dayjs from "dayjs"
import {onMounted, onUnmounted, ref} from "vue"

export const useDate = () => {
    const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    const timer = null
    onMounted(() => {
        timer = setInterval(() => {
            date.value =dayjs().format('YYYY-MM-DD HH:mm:ss')
        },1000)
    })
    onUnmounted(() => {
        
    })
}