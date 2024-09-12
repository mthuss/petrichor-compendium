import { Alert } from "react-native"
export const server = "http://200.145.216.24:5757"

export function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
    }
}

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function hasDuplicate(item, favorite_list){
    if(favorite_list)
        return favorite_list.filter(id => id === item).length ? true : false
    return false
}

export function isFavorited(item, user){
    // console.warn(user["data"])
    const data = user["data"]
    if(data)
        return data.filter(id => id === item).length ? true : false
    return false

}
