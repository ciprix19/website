const AWS_BACKEND_URL = import.meta.env.VITE_AWS_BACKEND_URL

export type VisitType = {
    id: 'total',
    count: number
}

export const readBackendNumberOfVisits = async (): Promise<VisitType | null> => {
    try {
        const response = await fetch(`${AWS_BACKEND_URL}`)
        return await response.json()
    } catch (e) {
        console.error(e)
        return null
    }
}

export const incrementBackendVisits = async (): Promise<boolean | null> => {
    try {
        const response = await fetch(`${AWS_BACKEND_URL}`, {
            method: 'POST'
        })
        return response.ok
    } catch (e) {
        console.error(e)
        return null
    }
}
