import authentication from './authentication';
import game from './game';

import { combineReducers } from 'redux';

export default combineReducers({
    authentication,
    game
});
