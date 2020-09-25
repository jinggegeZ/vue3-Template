
export const useChecklogin = (item:any,next:any) => {
    const user = localStorage.getItem('user')
    if(user){
        next(item)
    }
    else {
        alert('您还没有登录')

    }
}