import { MAKE_AUTHENTICATED, MAKE_UNAUTHENTICATED } from "../actions/types"


const initialState = {
    username:"",
    email:"",
    token:"",
    loggedIn:false,
    authChecking:true,
    loggingIn:false,
    registering:false,
}

const authReducer = (state = initialState,action)=>{
    switch(action.type){
        case MAKE_AUTHENTICATED:
            var {username,email,token} = action.payload;
            state = {...state,
                username,
                email,
                token,
                loggedIn:true,
                authChecking:false,
                loggingIn:false
            }
            return state;
        case MAKE_UNAUTHENTICATED:
            state={...initialState,authChecking:false}
            return state;
        default:
            return state;
    }
}

export default authReducer;