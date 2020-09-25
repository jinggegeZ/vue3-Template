export const usesessionStorage = () => {
    const getMessage = (target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            return JSON.parse(usesessionStorage.getItem(target)!)
        } else {
            return usesessionStorage.getItem(target)
        }
    }
    const setMessage = (key: string, target: any) => {
        if (typeof target === 'object' && !Array.isArray(target)) {
            JSON.stringify(usesessionStorage.setItem(key, target)!)
        } else {
            return usesessionStorage.setItem(key, target)
        }
    }
    const clearMessage = (key: string) => {
        usesessionStorage.removeItem(key)
    }

    return {
        getMessage, setMessage, clearMessage
    }
}