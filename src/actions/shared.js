import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveTweets } from './tweets';
import {authedUser} from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID= 'tylermcginnis' 
export function handleInitialData(){
    return (dispatch) =>{
        dispatch(showLoading());

        return getInitialData().then(({users, tweets}) => {
            dispatch(receiveTweets(tweets))
            dispatch(receiveUsers(users))
            dispatch(authedUser(AUTHED_ID))
            dispatch(hideLoading())

        })
    }
}