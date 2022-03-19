// export let  authreducer = (state={},action:any)=>{
//     if(action.type==="LOGGED_IN_USER"){
//         return action.payload
//     }

//     if(action.type === "LOGOUT"){
//         return action.payload
//     }

//     return{state}

// }


//set token on state from local storage  
//so if we refresh the page the token will set again from local storage
let userstate: string | null;
if (window.localStorage.getItem("auth")){
    userstate = (window.localStorage.getItem("auth")) 
}else{
    userstate = null
}
export  let loginuser = (state= userstate ,action:any)=>{

    if(action.type==="LOGIN_REQUEST"){
        return {state: action.payload }
    }
    if(action.type === "LOGIN_SUCCESS"){
        return {state: action.payload }
    }
    if(action.type === "LOGIN_FAILED"){
        return null
    }
    if(action.type === "LOGOUT"){
        return null 
    }
    return state
}