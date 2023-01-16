import {createStore , applyMiddleware , combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { alertsReducer } from './reducer/alertReducer';
import { postsReducer } from './reducer/postsReducer';
import { usersReducer } from './reducer/userReducer';


const rootReducer = combineReducers({
    usersReducer: usersReducer,
    alertsReducer : alertsReducer,
    postsReducer: postsReducer,  
})

const composeEnhancers = composeWithDevTools({
    
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
      
    )
  );

export default store;