import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_FAVOURITES:
      return [
        ...state,
        Object.assign({}, action.fav)
      ];
     
      default:
            return state;
    }
  };