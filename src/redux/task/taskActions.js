import {CHANGE_POSITION} from './taskTypes'

export const changePosition = (columns) => {
    return {
        type: CHANGE_POSITION,
        payload: columns
    }
}


