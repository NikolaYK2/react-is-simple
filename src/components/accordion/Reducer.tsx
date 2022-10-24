export const COLLAPSED = 'COLLAPSED';
export type ReducerType = {
    type: string,
};

export type StateType ={
    collapsed: boolean,
};

export const reducer = (state: StateType, action: ReducerType): StateType  => {
    switch (action.type){
        case COLLAPSED:
            return {...state, collapsed:!state.collapsed};
            // const stateCopy = {...state};
            // stateCopy.collapsed = !state.collapsed
            // return stateCopy;
        default:
            throw new Error("sorry nah");
    }
    return state;
    // if (action.type === 'COLLAPSED') {
    //     return !state;
    // }
    // return state;
};
