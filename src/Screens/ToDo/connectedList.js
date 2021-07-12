import List from '../../Components/List';
import {connect} from 'react-redux';
import {Selectors} from './redux/reducer';

const getList = state => {
  const data = Selectors.items(state);

  console.log('items', data);

  return data;
}

const mapStateToProps = state => ({
  data: getList(state),
  loading: Selectors.loading(state)
});

export default connect(mapStateToProps)(List);