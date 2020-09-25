import {Modal} from "ant-design-vue"
export const useChecklogin = () => {
    const user = localStorage.getItem('user')
    if(user){
       alert('一登录')
    }
    else {
        Modal.confirm(title:'提示')
        
    }
}