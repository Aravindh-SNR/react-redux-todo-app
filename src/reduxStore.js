import {createStore} from 'redux';
import {reducer} from './reducers/reduxReducer';

const store = createStore(reducer);

export default store;