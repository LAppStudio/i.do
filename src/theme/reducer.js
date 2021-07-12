const PATH = 'theme'; 

const Types = {
  setTheme: `${PATH}/SET_THEME`,
  reset: `${PATH}/RESET`,
};

const INITIAL_STATE = {
  selectedTheme: 'VANILLA',
};

const Actions = {
  [Types.setTheme]: (state, {selectedTheme = 'VANILLA'}) => ({
    ...state,
    selectedTheme,
  }),
  [Types.reset]: () => INITIAL_STATE,
};

const reducer = (state = INITIAL_STATE, {type = null, ...action}) => {
  switch (type) {
    case Types[type] !== undefined:
      return Actions[type](state, action);
    default:
      return state;
  }
};

const Creators = {
  setTheme: theme => ({type: Types.setTheme, selectedTheme: theme}),
  reset: () => ({type: Types.reset}),
};

const Selectors = {
  selected: state => state[PATH].selectedTheme,
}

export default Creators;

export {reducer, Actions, Types, PATH, Selectors};
