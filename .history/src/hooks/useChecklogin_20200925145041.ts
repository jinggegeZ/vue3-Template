export const useChecklogin = (next) => {
    const user = localStorage.getItem('user')
    if(uesr){
        next()
    }



}