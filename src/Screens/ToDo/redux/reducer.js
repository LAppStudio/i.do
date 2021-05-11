const PATH = 'todo';

const Types = {
  create: `${PATH}/CREATE`,
  createSuccess: `${PATH}/CREATE_SUCCESS`,
  createError: `${PATH}/CREATE_ERROR`,
  
  delete: `${PATH}/EDIT`,
  deleteSuccess: `${PATH}/EDIT_SUCCESS`,
  deleteError: `${PATH}/EDIT_ERROR`,

  update: `${PATH}/UPDATE`,
  updateSuccess: `${PATH}/UPDATE_SUCCESS`,
  updateError: `${PATH}/UPDATE_ERROR`,

  updateCheck: `${PATH}/UPDATE_CHECK`,
  updateCheckSuccess: `${PATH}/UPDATE_CHECK_SUCCESS`,
  updateCheckError: `${PATH}/UPDATE_CHECK_ERROR`,
};


const INITIAL_STATE = {
  items: [],
  itemsKeys: {},
  itemsValues:{},

  loading: false,
}

const Creators = {
  create: (item) => ({type: Types.create, item}),
  createSuccess: ({items, itemsKeys, itemsValues}) => ({type: Types.createSuccess, items, itemsKeys, itemsValues}),
  createError:  () => ({type: Types.createError}),

  delete: (itemKey) => ({type: Types.delete, itemKey}),
  deleteSuccess: (items, itemsKeys, itemsValues) => ({type: Types.deleteError, items, itemsKeys, itemsValues}),
  deleteError:  () => ({type: Types.deleteError}),

  update: (item) => ({type: Types.update, item}),
  updateSuccess: (items, itemsKeys, itemsValues) => ({type: Types.updateSuccess, items, itemsKeys, itemsValues}),
  updateError:  () => ({type: Types.updateError}),

  updateCheck: (itemKey) => ({type: Types.updateCheck, itemKey}),
  updateCheckSuccess: (itemKey, value) => ({type: Types.updateCheckSuccess, itemKey, value}),
  updateCheckError: () => ({type: Types.updateCheckError}),
};

const Actions = {
  [Types.create]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.createSuccess]: (state, {items = [], itemsKeys = {}, itemsValues = {}}) => ({
    ...state,
    loading: false,
    items, 
    itemsKeys,
    itemsValues,
  }),
  [Types.createError]: (state) => ({
    ...state,
    loading: false
  }),

  [Types.delete]: (state) => ({
    ...state,
    loading: true,
  }),
  [Types.deleteSuccess]: (state, {items, itemsKeys, itemsValues}) => ({
    ...state,
    loading: false,
    items,
    itemsKeys,
    itemsValues,
  }),
  [Types.deleteError]: (state) => ({
    ...state,
    loading: false
  }),

  [Types.update]: (state) => ({
    ...state,
    loading: true
  }),
  [Types.updateSuccess]: (state, {items, itemsKeys, itemsValues}) => ({
    ...state,
    loading: false,
    items,
    itemsKeys,
    itemsValues,
  }),
  [Types.updateError]: (state) => ({
    ...state,
    loading: false
  }),

  [Types.updateCheck]: (state) => ({
    ...state,
    loading: true
  }),
  [Types.updateCheckSuccess]: ({itemsValues,...state}, {itemKey, value}) => ({
    ...state,
    loading: false,
    itemsValues: {
      ...itemsValues,
      [itemKey]: value
    }
  }),
  [Types.updateCheckError]: (state) => ({
    state,
    loading: false
  })
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case Types.create:
      return Actions[Types.create](state, action);
    case Types.createSuccess:
      return Actions[Types.createSuccess](state, action);
    case Types.createError:
        return Actions[Types.createError](state, action);

    case Types.delete:
      return Actions[Types.delete](state, action);
    case Types.deleteSuccess:
      return Actions[Types.deleteSuccess](state, action);
    case Types.deleteError:
        return Actions[Types.deleteError](state, action);

    case Types.update:
      return Actions[Types.update](state, action);
    case Types.updateSuccess:
      return Actions[Types.updateSuccess](state, action);
    case Types.updateError:
        return Actions[Types.updateError](state, action);
    
    case Types.updateCheck:
      return Actions[Types.updateCheck](state, action);
    case Types.updateSuccess:
      return Actions[Types.updateCheckSuccess](state, action);
    case Types.updateError:
        return Actions[Types.updateCheckError](state, action);

    default:
      return state;
  }
};

const Selectors = {
  items: (state) => state[PATH].items,
  itemsKeys: (state) => state[PATH].itemsKeys,
  itemsValues: (state) => state[PATH].itemsValues,
  loading: (state) => state[PATH].loading, 
};

export {Types, Selectors, PATH, reducer};
export default Creators;