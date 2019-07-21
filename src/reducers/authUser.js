import { AUTH_VK } from '../actions/ActionTypes';

export function authUser(state = { userId: 0, userName: '' }, action) {
    switch(action.type) { 
        case AUTH_VK:
            return { userId: action.userId, userName: action.userName };
        default:
            return state;
    }
}