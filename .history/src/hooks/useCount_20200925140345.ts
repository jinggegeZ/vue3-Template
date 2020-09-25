import {ref} from "vue"
import {message} from "ant-design-vue"

export const useCount =(current = 0,{min,max}:{min?:number,max?:number},delay= 1000) => {
    if(current < min!){
        current = min!
        message.error('默认值小于最小值')
    }
    if(current > max!){
        current = max!
        message.error('默认值大于最大值')
    }
    const count = ref<number>(current)
    //增加
    const increase = () => {
        if(count.value< max!){
            count.value ++
        }
    }
    //减少
    const reduce = () => {
        if(count.value> min!){
            count.value --
        }
    }
    //设置
    const setup = (num:number) => {
        count.value= num
    }
    //重置
    const reset = () => {
        count.value = current
    }
    //延迟加
    const delayPlus = () => {
        setTimeout(() => {
            count.value++
        },delay)
    }
    //延迟减
    const delayRed = () => {
        setTimeout(() => {
            count.value--
        },delay)
    }
    const stepinc = () => {
        
    }















}