import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useReducer } from "react";
import { hasDuplicate, showError } from "../common";
import { server } from "../common";
import axios from "axios";

const UserContext = createContext({})
const initialState = {user: null}

async function uploadUserData(user){
    try {
        await axios.post(`${server}/data`,
            {
                username: user.username,
                data: JSON.stringify(user.data)
            }
        )
    } catch (e) {
        showError(e)
    }
}

async function downloadUserData(user){
    try{
        const res = await axios.post(`${server}/getData`,{username: user.username})
        user["data"] = res.data["data"]
    }catch(e){
        showError(e)
    }
}
async function fetchUser() {
    try {
        const user = await AsyncStorage.getItem('user')
        return { user: user ? JSON.parse(user) : null }
    } catch (e) {
        console.error("Erro ao carregar usuário: " + e)
        return { user: null }
    }
}

async function saveUser(user) {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user))
    }
    catch (e) {
        console.error("Erro ao salvar usuário: " + e)
    }
}

export const UserProvider = props => {
    useEffect(() => {
        async function fetchData() {
            const fetchedUser = await fetchUser()
            if (fetchedUser != null)
                dispatch({ type: "loadUser", payload: fetchedUser.user })
        }
        fetchData()
    }, [])

    function reducer(state, action) {
        switch (action.type) {
            case "login": {
                const user = action.payload
                downloadUserData(user)
                saveUser(user)
                return { user: user }
            }
            case "loadUser": {
                const user = action.payload
                downloadUserData(user)
                return { user: user }
            }
            case "logout": {
                return { user: null }
            }
            case "toggleFavorite": {
                const user = action.payload.user
                const item_id = action.payload.item_id
                const data = user["data"]
                if (!data) {
                    user["data"] = [item_id]
                    saveUser(user)
                    uploadUserData(user)
                    return { user: user }
                }
                if (hasDuplicate(item_id, data)) {
                    user["data"] = data.filter(id => id !== item_id)
                    saveUser(user)
                    uploadUserData(user)
                    return { user: user }
                }
                var updatedFavorites
                updatedFavorites = [...data, item_id]
                user["data"] = updatedFavorites
                saveUser(user)
                uploadUserData(user)
                return { user: user }
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;