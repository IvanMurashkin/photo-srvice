import VK from 'vk-openapi';

const VERSION_VK_API = '5.73';

export const AUTH_VK = 'AUTH_VK'; 
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const SELECT_PHOTO = 'SELECT_PHOTO';
export const REQUEST_ALBUM = 'REQUEST_ALBUM';
export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const CLEAR_PHOTOS = 'CLEAR_PHOTOS'; 
export const CURSOR_OVER_PHOTO = 'CURSOR_OVER_PHOTO';
export const CURSOR_OUT_PHOTO = 'CURSOR_OUT_PHOTO';
export const REQUEST_PHOTOS_COMPLETED = 'REQUEST_PHOTOS_COMPLETED';

export function authVK(userId, userName) {
    return {
        type: AUTH_VK,
        userId, 
        userName
    }
}

export function selectAlbum(id, title) {
    return {
        type: SELECT_ALBUM,
        id,
        title
    };
}

export function selectPhoto(photo) {
    return {
        type: SELECT_PHOTO,
        photo
    };
}

export function requestAlbums(albums) {
    return { 
        type: REQUEST_ALBUM,
        albums
    };
}

export function requestPhotos(response) {
    return { 
        type: REQUEST_PHOTOS,
        photos: response.items,
        totalCount: response.count,
        isFetching: true
    };
}

export function clearPhotos() {
    return {
        type: CLEAR_PHOTOS
    };
}

export function requestPhotosCompleted() {
    return {
        type: REQUEST_PHOTOS_COMPLETED,
        isFetching: false
    }
}

export function cursorOverPhoto(photo, visibilityTooltip, position) {
    return {
        type: CURSOR_OVER_PHOTO,
        visibilityTooltip,
        position,
        photo
    }
}


export function cursorOutPhoto(visibilityTooltip) {
    return {
        type: CURSOR_OUT_PHOTO,
        visibilityTooltip
    }
}

export function loginViaVK() {
    return function(dispatch) {
        VK.Auth.login(res => {
            if (res.session) {
                const userId = res.session.user.id;
                const userName = res.session.user.first_name;
                    
                dispatch({
                    type: AUTH_VK,
                    userId, 
                    userName
                });

                dispatch(fetchAlbumsCurrentUser());
            }
          }, 4)
    }
}

export function fetchAlbumsCurrentUser() {
    return function(dispatch, getState) {
        const state = getState();
        
        VK.Api.call(
            'photos.getAlbums',
            { owner_id: state.authUser.userId, need_covers: 1, v: VERSION_VK_API },
            r => {
                dispatch(requestAlbums(r.response.items));
            }
        )
    }
}

export function fetchPhotosBySelectedAlbum(offset, count) {
    return function(dispatch, getState) {
        const state = getState();

        VK.Api.call(
            'photos.get', { 
                owner_id: state.authUser.userId, 
                album_id: state.selectedAlbum.albumId,
                offset,
                count,
                v: VERSION_VK_API
            },
            r => {
                dispatch(requestPhotos(r.response));
            }
        )
    }
}