export const useChecklogin = (next:any) => {
    const user = localStorage.getItem('user')
    if(user){
        next()
    }
    else {
        alert('您还没有登录')
    }


}