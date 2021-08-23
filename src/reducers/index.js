import { combineReducers } from 'redux';
import contacts from './contactReducer';
import fav from './contactReducerFav'

export default combineReducers({
    contacts: contacts,
    fav:fav
});