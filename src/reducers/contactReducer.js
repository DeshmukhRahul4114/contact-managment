import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
      // case actionTypes.CREATE_FAVOURITES:
      // return [
      //   ...state,
      //   Object.assign({}, action.contact)
      // ];
      case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
      case actionTypes.EDIT_CONTACT:
        debugger;
       const t= state.map((data,i) => i!==action.id?data:
      { ...data,name:action.contact});
      return t;
      default:
            return state;
    }
  };

  