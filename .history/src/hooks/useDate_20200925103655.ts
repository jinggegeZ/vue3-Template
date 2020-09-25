import dayjs from "dayjs"
import {ref} from "vue"

export const useDate = () => {
    const date = ref(dayjs().format())
}