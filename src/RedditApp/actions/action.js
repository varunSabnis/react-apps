import * as actionTypes from './actionTypes';

/*
List down all static action creators here first then declare the thunk middleware action creators
state shape - {
     jquery :{
        isFetching : true,
        isInvalidated : false,
        items : [
            {
             id : 45,
             post : "Jquery is awesome, but angular is jquery agnostic"
          },
          {
           id : 34,
           post : "Jquery is pretty easy"
        }
      ]
   }

}

*/

function FetchingStatus(subreddit,status){
       
       return({
             type : actionTypes.REQUEST_IS_FETCHING,

       })
}
