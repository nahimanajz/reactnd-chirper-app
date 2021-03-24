import { saveLikeToggle } from '../utils/api';

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const TOGGLE_TWEETS = 'TOGGLE_TWEETS';
export  function receiveTweets(tweets) {
   return {
       type: RECEIVE_TWEETS,
       tweets
   }
}
function toggleTweet({id, authedUser, hasLiked}) {
    
 return {
     type: TOGGLE_TWEETS,
     id,
     authedUser,
     hasLiked
 }
}
export function handleToggleTweet(info){
    return (dispatch) => {
        dispatch(toggleTweet(info))
        return saveLikeToggle(info)
                .catch((e) =>{
                    console.warn('Error in handle Toggle Tweet', e)
                    dispatch(toggleTweet(info))
                    alert('There was an error liking the tweet')
                } )
                
    }
}