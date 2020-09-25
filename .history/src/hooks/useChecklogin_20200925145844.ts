import {message} from "ant-design-vue"
export const useChecklogin = (item:any,next:any) => {
    const user = localStorage.getItem('user')
    if(user){
        next(item)
    }
    else {
        message.error('您还没有登录')

    }


}