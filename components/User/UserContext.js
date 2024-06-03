import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useReducer } from "react";

const UserContext = createContext({})
const initialState = {user: null}

async function fetchUser(){
    try{
        const user = await AsyncStorage.getItem('user')
        return {user: user ? JSON.parse(user) : null}
    }catch(e) {
        console.error("Erro ao carregar usuário: " + e)
        return {user: null}
    }
}

async function saveUser(user){
    try{
        await AsyncStorage.setItem('user', JSON.stringify(user))
    }
    catch(e)
    {
        console.error("Erro ao carregar usuário: " + e)
    }
}
export const UserProvider = props => {
    useEffect(() => {
        async function fetchData() {
            const fetchedUser = await fetchUser()
            if(fetchedUser != null)
                dispatch({type: "loadUser", payload: fetchedUser.user})
        }
        fetchData()
    },[])

    function reducer(state,action){
        switch(action.type)
        {
            case "login": {
                const user = action.payload
                saveUser(user)
                return {user: user}
            }
            case "loadUser": {
                const user = action.payload
                return {user: user}
            }
        }
    }
    const [state,dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{state,dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;