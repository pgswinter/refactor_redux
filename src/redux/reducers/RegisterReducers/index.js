import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_SUBREDDIT
} from '../../actions/RegisterActions'

function addPosts(input_data,subreddit){
  return fetch(`http://localhost:3200/${subreddit}`,{
    method: 'POST', // or 'PUT'
    body: JSON.stringify(input_data), 
    headers: new Headers({'Content-Type': 'application/json'})
  })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
}

function addedSubreddit(state=[], action) {
  switch (action.type){
    case ADD_SUBREDDIT:
      const {input_data,subreddit} = action
      return addPosts(input_data,subreddit)
    default:
      return state
  }
}
 
function selectedSubreddit(state = 'products', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}
 
function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
 
function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

// function addPosts(state, action){
//   switch(action.type){
//     case ADD_POSTS:

//   }
// }
 
const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  addedSubreddit
})
 
export default rootReducer