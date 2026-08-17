export const getLocally = (key: string) => {
    const rawData = localStorage.getItem(key)
    if (rawData) {
        try {
            return JSON.parse(rawData)
        } catch (e) {
            localStorage.removeItem(key)
        }
    }
}
