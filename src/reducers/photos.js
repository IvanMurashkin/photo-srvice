import { SELECT_PHOTO, REQUEST_PHOTOS, REQUEST_PHOTOS_COMPLETED, CLEAR_PHOTOS } from '../actions/ActionTypes';

export function selectedPhoto(state = {}, action) {
    switch(action.type) {
        case SELECT_PHOTO:
            return action.photo
        default:
            return state;
    }
}

export function photos(state = { totalCount: 0, items: [], isFetching: false }, action) {
    switch(action.type) {
        case REQUEST_PHOTOS:
            return { totalCount: action.totalCount, items: [...state.items, ...action.photos], isFetching: action.isFetching };
        case REQUEST_PHOTOS_COMPLETED:
            return { ...state, isFetching: action.isFetching };
        case CLEAR_PHOTOS:
            return { totalCount: 0, items: [], isFetching: false }
        default:
            return state;
    }
}