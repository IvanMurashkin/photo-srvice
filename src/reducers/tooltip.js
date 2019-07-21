import { CURSOR_OVER_PHOTO, CURSOR_OUT_PHOTO } from '../actions/ActionTypes';

export function tooltip(state = { 
    visibility: false, 
    position: {},
    photo:{}
}, action) {
    switch(action.type) {
        case CURSOR_OVER_PHOTO:
            return {
                visibility: action.visibilityTooltip,
                position: {
                    left: action.position.left,
                    top: action.position.top
                },
                photo: action.photo
            };
        case CURSOR_OUT_PHOTO:
            return {...state, visibility: action.visibilityTooltip};
        default:
            return state;
    }
}