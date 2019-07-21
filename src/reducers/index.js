import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { selectedAlbum, albums  } from './albums';
import { authUser } from './authUser';
import { tooltip } from './tooltip';
import { photos, selectedPhoto } from './photos';

export default function(history) { 
    return combineReducers({
        router: connectRouter(history),
        selectedAlbum, selectedPhoto, albums, 
        authUser, photos, tooltip
    });
}