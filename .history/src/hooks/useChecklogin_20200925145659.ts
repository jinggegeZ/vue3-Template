import {message} from "ant-design-vue"
export const useChecklogin = (next:any) => {
    const user = localStorage.getItem('user')
    if(user){
        next()
    }
    else {
        message.error('您还没有登录')
        
    }


}