import { Alert } from "react-native"
export const server = "http://200.145.216.24:5757"

export function showError(err) {
    if (err.response && err.response.data) {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err.response.data}`)
    } else {
        Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
    }
}