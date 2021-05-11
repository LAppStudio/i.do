import ListItem from '../../Components/ListItem';
import {connect} from 'react-redux';
import Creators, {Selectors} from './redux/reducer';

const getItemValue = (id) => state => Selectors.itemsValues(state)[id] ?? false;

const mapStateToProps = (state, {id}) => ({
  checked: getItemValue(id)(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: (itemKey) => dispatch(Creators.updateCheck(itemKey)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);