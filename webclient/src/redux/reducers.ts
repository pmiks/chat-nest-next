import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from './auth-reducer'
import { chatReducer } from './chat-reducer'

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
