import dayjs from "dayjs"
import {onMounted, ref} from "vue"

export const useDate = () => {
    const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'))
    const timer = nul
    onMounted(() => {
        
    })
}