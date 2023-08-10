import { createContext, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useEffect } from "react";

const AuthContext=createContext();

export function useAuth(){
    const auth = useContext(AuthContext)
    if(!auth){
        return ("Error: auth is empty");
    }
    return auth;
}

export function AuthProvider(props){
    
    const [state,setState] = useState({
        username:null,
        email:null,
        user_id:null,
        login,
        logout,
    })

    useEffect(() => {
        // console.log("state", state.username);
      }, [state.username]);

    function login(username,password){
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const body ={
            "username":username,
            "password":password
        }
        axios.post(baseUrl+'api/token/',body)
        .then(response =>{
            let token=response.data.access
            // console.log(token)
            const decoded= jwt.decode(token)
            // console.log(decoded)
            const newState={
                tokens:response.data,
                username: decoded.username,
                email:decoded.email,
                user_id:decoded.user_id
            }
            // console.log("newState"+newState.username)
            setState((prevState) => ({
                ...prevState,
                tokens: response.data,
                username: decoded.username,
                email: decoded.email,
                user_id: decoded.user_id,
              }));
        }).catch(error => {
            console.error(error);
          }

        )
    }

    function logout(){
        setState((prevState) => ({
            ...prevState,
            tokens: null,
            username: null,
            email: null,
            user_id: null,
          }));
    }

    return(
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}