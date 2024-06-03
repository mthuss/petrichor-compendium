import { TextInput, ImageBackground, View, Text } from 'react-native'
import Styles from './Styles'
import { useState } from 'react'
import { RORButton } from './RORComponents'

export default props => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <ImageBackground source={require('../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
            <View style={[Styles.card, { flex: 1, marginTop: 64, justifyContent: "center" }]}>
                <View style={{ margin: 24, alignContent: "center" }}>
                    <Text style={[Styles.RORText, { fontSize: 48, textAlign: 'center' }]}>Login</Text>
                    <View style={{ marginTop: 42 }}>
                        <View style={[Styles.button, { padding: 10, marginHorizontal: 0 }]}>
                            <TextInput fontSize={16} paddingLeft={6} placeholderTextColor={Styles.RORText.color} fontFamily={Styles.RORText.fontFamily} style={Styles.RORText} color={Styles.RORText.color} placeholder="Username" onChangeText={text => setUsername(text)} value={username} />
                        </View>
                        <View style={[Styles.button, { padding: 10, marginTop: 16 }]}>
                            <TextInput secureTextEntry fontSize={16} paddingLeft={6} placeholderTextColor={Styles.RORText.color} fontFamily={Styles.RORText.fontFamily} style={Styles.RORText} color={Styles.RORText.color} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 24 }}>
                                <RORButton onPress={() => console.warn(username + ', ' + password)}><Text style={Styles.RORText}>Login</Text></RORButton>
                            </View>
                            <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 24 }}>
                                <RORButton onPress={() => console.warn(username + ', ' + password)}><Text style={Styles.RORText}>Register</Text></RORButton>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}