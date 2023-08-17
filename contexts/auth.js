import { createContext, useState } from "react";
import { useContext } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useEffect } from "react";

const AuthContext = createContext();


export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) {
    return "Error: auth is empty";
  }
  return auth;
}

export function AuthProvider(props) {
  const initialClientState = JSON.parse(
    typeof window !== "undefined" && localStorage.getItem("authState")
  ) || {
    username: null,
    email: null,
    user_id: null,
    tokens: null,
  };

  const [state, setState] = useState(initialClientState);


  useEffect(() => {
    // Save the state to local storage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("authState", JSON.stringify(state));
    }
  }, [state]);

  function login(username, password) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const body = {
      username: username,
      password: password,
    };
    axios
      .post(baseUrl + "api/token/", body)
      .then((response) => {
        let token = response.data.access;
        console.log("token: " +token)
        const decoded = jwt.decode(token);
        localStorage.setItem("tokens",JSON.stringify(response.data))
        localStorage.setItem("access",JSON.stringify(response.data.access))
        localStorage.setItem("userData",JSON.stringify(decoded))
        // console.log(decoded)
        const newState = {
          tokens: response.data,
          username: decoded.username,
          email: decoded.email,
          user_id: decoded.user_id,
        };
        // console.log("newState"+newState.username)
        setState((prevState) => ({
          ...prevState,
          tokens: response.data,
          username: decoded.username,
          email: decoded.email,
          user_id: decoded.user_id,
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function logout() {
    setState((prevState) => ({
      ...prevState,
      tokens: null,
      username: null,
      email: null,
      user_id: null,
      
    }));
    localStorage.clear()
  }
//////////////////////////////sign up //////////////////////////
function signup_customer(info) {
  console.log(info)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  axios.post(`${baseUrl}accounts/signup/`,info)
  .then((response)=>console.log(response.status))
}
/////////////////////////////sign up artist /////////////////
function signup_artist(info) {
  console.log(info)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  axios.post(`${baseUrl}accounts/artist_signup/`,info)
  .then((response)=>console.log(response.status))
}


//////////////////////////////////////////////////////////
  return (
    <AuthContext.Provider value={{ ...state, login, logout,signup_customer,signup_artist,}}>
      {props.children}
    </AuthContext.Provider>
  );
}
