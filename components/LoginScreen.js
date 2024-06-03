import { TextInput, ImageBackground, View, Text, Alert } from 'react-native'
import Styles from './Styles'
import { useState } from 'react'
import { RORButton } from './RORComponents'
import axios from 'axios'
import {server, showError} from './common'

export default props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    signup = async () => {
        try {
            await axios.post(`${server}/signup`,
                {
                    username: username,
                    password: password
                }
            )
        }
        catch (e) {
            showError(e)
        }
    }

    signin = async () => {
        try{
            const response = await axios.post(`${server}/signin`,
                {
                    username: username,
                    password: password
                }
            )
            console.warn(response.data)
        }
        catch(e){
            showError(e)
        }
    }
    return (
        <ImageBackground source={require('../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
            <View style={{ margin: 24, alignContent: "center" }}>
                <View style={Styles.button}>
                    <View style={[Styles.buttonInside, { justifyContent: 'center', paddingVertical: 16 }]}>
                        <Text style={[Styles.RORText, { fontSize: 48, textAlign: 'center' }]}>Login</Text>
                    </View>
                </View>
                <View style={{ marginTop: 42 }}>
                    <View style={[Styles.button, { padding: 10, marginHorizontal: 0 }]}>
                        <TextInput fontSize={16} paddingLeft={6} placeholderTextColor={Styles.RORText.color} fontFamily={Styles.RORText.fontFamily} style={Styles.RORText} color={Styles.RORText.color} placeholder="Username" onChangeText={text => setUsername(text)} value={username} />
                    </View>
                    <View style={[Styles.button, { padding: 10, marginTop: 16 }]}>
                        <TextInput secureTextEntry fontSize={16} paddingLeft={6} placeholderTextColor={Styles.RORText.color} fontFamily={Styles.RORText.fontFamily} style={Styles.RORText} color={Styles.RORText.color} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 24 }}>
                            <RORButton onPress={() => signin()}><Text style={Styles.RORText}>Login</Text></RORButton>
                        </View>
                        <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 24 }}>
                            <RORButton onPress={() => signup()}><Text style={Styles.RORText}>Register</Text></RORButton>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}