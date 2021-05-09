import List from '../../Components/List';
import {connect} from 'react-redux';

import {items} from '../../mocks/todo.json';

const mapStateToProps = state => ({
  data: items,
});

export default connect(mapStateToProps)(List);