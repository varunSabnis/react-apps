/*
      REQUEST_IS_FETCHING  - when request fetch is happening show loading....
      REQUEST_COMPLETE - when request fetch completes show all posts
      REQUEST_FAILED - when request fetch fails show an error message
      SELECT_SUBREDDIT - when u enter a topic u want to search for and hit submit
    // will see later -  DID_INVALIDATE - when u click on topic that name u invalidate it and hide all posts relating to the topic
*/

export const REQUEST_IS_FETCHING = 'REQUEST_IS_FETCHING';
export const REQUEST_COMPLETE = 'REQUEST_COMPLETE';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const DID_INVALIDATE = 'DID_INVALIDATE';
