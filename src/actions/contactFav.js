import * as actionTypes from './actionTypes';

export const createContactFav = (fav) => {
    return {
      type: actionTypes.CREATE_FAVOURITES,
      fav: fav
    }
  };  