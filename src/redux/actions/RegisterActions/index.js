import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const ADD_SUBREDDIT = 'ADD_SUBREDDIT'

export function addPosts(input_data,subreddit){
  const action = {
    type: ADD_SUBREDDIT,
    input_data,
    subreddit
  }
  return action
}

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}
 
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}
 
function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}
 
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.map(child => child),
    receivedAt: Date.now()
  }
}

// function addPosts(data){
//   type: ADD_POSTS,
//   data
// }

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch(`http://localhost:3200/${subreddit}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}
 
export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

// function request(url,options){
//   fetch(url,options)
//   .then(response => response.json())
//   .catch(error => console.log('Error:', error))
//   .then(error => console.log('Success:', response))
// }

// export function postPosts(data) {
//   return dispatch => {
//     dispatch(addPosts(data))
//     return request('http://localhost:3200/products',
//       {
//         method:'post',
//         data
//       })
//   }
// }