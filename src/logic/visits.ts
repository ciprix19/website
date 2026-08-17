import { readBackendNumberOfVisits } from "../api/backend/numberOfVisits"
import { getLocally } from "../api/local-storage/get-locally"
import { CACHE_TIME } from "../utils/constants"

export const getVisits = async ()  => {
    const lastUpdate = +getLocally('lastGetVisitCount')
    const hasFreshCache = Date.now() - lastUpdate < CACHE_TIME

    let numberOfVisits: number
    if (hasFreshCache) {
        numberOfVisits = getLocally('visitsCount')
        console.log('cache')
    } else {
        let visitsObject = await readBackendNumberOfVisits()

        if (!visitsObject) {
            numberOfVisits = getLocally('visitsCount')
            console.log('cache')
        } else {
            numberOfVisits = visitsObject.count
            console.log('backend')
        }
    }

    if (numberOfVisits) {
        localStorage.setItem('visitsCount', `${numberOfVisits}`)
        localStorage.setItem('lastGetVisitCount', JSON.stringify(Date.now()))
    }

    return numberOfVisits
}
