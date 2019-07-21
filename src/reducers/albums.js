import { SELECT_ALBUM, REQUEST_ALBUM } from '../actions/ActionTypes';

export function selectedAlbum(state = {     
        albumId: 0,
        albumTitle: ''
    }, action) {
    switch (action.type) {
        case SELECT_ALBUM:
            return {...state, ...{
                albumId: action.id,
                albumTitle: action.title,
            }};
        default:
            return state;
    }
}

export function albums(state = [], action) {
    switch (action.type) {
        case REQUEST_ALBUM:
            return [...action.albums];
        default:
            return state;
    }
}

