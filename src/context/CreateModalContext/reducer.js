const Types = {
    show: 'modal/SHOW',
    hide: 'modal/HIDE',
    unmount: 'model/UNMOUNT',
};

export const INITIAL_STATE = {
    visible: false,
    mounted: false,
};

const Actions = {
    [Types.show]: (state) => ({
        ...state,
        mount: true,
        visible: true,
    }),
    [Types.hide]: (state) => ({
        ...state,
        visible: false,
    }),
    [Types.unmount]: (state) => ({
        ...state,
        mounted: false,
    }),
};

export const Creators = {
    show: () => ({type: Types.show}),
    hide: () => ({type: Types.hide}),
    unmount: () => ({type: Types.unmount}),
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Types.show: 
            return Actions[Types.show](state);
        case Types.hide:
            return Actions[Types.hide](state);
        case Types.unmount:
            return Actions[Types.unmount](state)
        default:
            throw new Error('Undefined reducer');
    }
}