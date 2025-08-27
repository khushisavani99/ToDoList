import { legacy_createStore as createStore} from 'redux'
import rootReducer from '../reducers'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /** Help to connect devtool with redux toolkit */
    )
 export default store