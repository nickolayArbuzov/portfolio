export const ROTATE_CUBE = 'ROTATE-CUBE';

export type ActionType = {
    type: string,
    x: number,
    y: number
}

export type StateType = {
    x: number,
    y: number
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type){
        case ROTATE_CUBE:
            return {
                ...state,
                x: action.x,
                y: action.y 
            }
        default:
            return state;
    }
}