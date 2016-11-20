import { combineReducers } from 'redux';


module.exports = combineReducers({
    news: require('src/Reduce/News/Main'),
    user: require('src/Reduce/User/Main'),
});