import {getInitialData} from '../utils/api'
import {receiveTweets, reveiceTweets} from '../actions/tweets'
import {receiveUsers, reveiceUsers} from '../actions/users'

export function handleInitialData () {
    return (dispatch) =>{
        return getInitialData()
        .then(({users,tweets}) =>{
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
        })
    }
}