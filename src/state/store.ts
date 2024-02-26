import {applyMiddleware, combineReducers, createStore} from "redux";
import {LoginReducer} from "./LoginReducer";
import {RegistrationReducer} from "./RegistrationReducer";


const rootReducer = combineReducers({
    login: LoginReducer,
    regis: RegistrationReducer
})

export const store = createStore(rootReducer, undefined);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;