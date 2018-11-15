import { FETCH_CREATURES, NEW_CREATURE } from './types'
import axios from 'axios'


export function fetchCreatures() {
    console.log('FETCH_CREATURES')
    return async(dispatch) => {
        try {
            const res = await axios.get('/api/creatures')
            dispatch({
                type: FETCH_CREATURES,
                payload: res.data,
            })

        } catch (error) {
            console.log(error)
        }


    }
}