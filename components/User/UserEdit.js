import { View, ImageBackground, Text, Image, FlatList, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Styles from '../Styles'
import { useContext, useState } from 'react'
import { ItemIcon, RORButton } from '../RORComponents'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FilterPopup from '../RORR/filterPopup'
import UserContext from './UserContext'
import { completeList } from '../itemIndex'
import { isFavorited } from '../common'

function save(username, dispatch, navigation){
    dispatch({type: "changeUsername", username: username})
    navigation.goBack()
}

// function save(username, state, navigation){
//     state.user.username = username
//     navigation.goBack()
// }

export default props => {
    const { state, dispatch } = useContext(UserContext)
    const [username, setUsername] = useState(state.user.username)

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ margin: 8, marginTop: 50, flex: 1 }}>
                    <View style={{ position: "absolute", width: "100%", zIndex: 1 }}>
                        <Image style={{ width: "100%" }} source={require('../../assets/RORR_Header.png')}></Image>
                        <View style={{ position: "absolute", top: 22, left: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent: "center" }}>
                            <Text style={{ fontFamily: "Risk-of-Rain", color: "#a6aeb1", marginRight: 64 }}>EDIT USER</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#1a1b20", borderStyle: "solid", borderWidth: 10, borderColor: "#2c2e3a", borderRadius: 5 }}>
                        <View style={{ flex: 1, marginTop: 54, justifyContent: "center"}}>
                            <View style={{ flex: 1, alignContent: 'center', alignItems: "center", marginTop: 32 }}>
                                <View style={Styles.userIcon}>
                                    <Image style={{ width: 90, height: 90, resizeMode: "contain" }} source={require('../../assets/commando.jpeg')} />
                                </View>
                                <View style={{ marginTop: 8 }}>
                                    <TextInput maxLength={16} onChangeText={setUsername} style={[Styles.RORText, { textAlign: 'center', fontSize: 52 }]}>{state.user.username}</TextInput>
                                </View>
                                <RORButton onPress={() => save(username, dispatch, props.navigation)} style={{marginTop: 36}}><Text style={Styles.RORText}>Save</Text></RORButton>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}