import { Image, Text, ImageBackground, View } from 'react-native'
import Styles from './Styles'

export default props => {
    const item = props.route.params
    return(
        <View style={Styles.container}>
            <ImageBackground source={require('../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ flex: 1, marginTop: 54 }}>
                    <View style={{ flex: 1, backgroundColor: "#333a4c", borderStyle: "solid", borderWidth: 6, borderColor: "#4b4b57", borderRadius: 5, margin: 10 }}>
                        <View style={Styles.card}>
                            <View style={[Styles.buttonInside, { flexDirection: "row", justifyContent: "center", padding: 8 }]}>
                                <Image style={{ width: 64, height: 64 }} source={{ uri: item.image }} />
                                <View style={{ margin: 16, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={[Styles.RORText,{fontSize: 16, textAlign: 'center'}]}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.card, { flex: 2 }]}>
                            <View style={[Styles.buttonInside, { flex: 1, padding: 16 }]}>
                                <Text style={Styles.RORText}>{item.pickup}</Text>
                                <View style={{marginTop: 24}}>
                                    <Text style={[Styles.RORText,{color: "#e6cc81",fontSize: 20, marginBottom: 8}]}>Description:</Text>
                                    <Text style={Styles.RORText}>{item.description}</Text>
                                </View>
                                <View style={{marginTop: 24}}>
                                    <Text style={[Styles.RORText,{color: "#e6cc81",fontSize: 20, marginBottom: 8}]}>Details:</Text>
                                    <Text style={[Styles.RORText,{color: "#e0e0e0"}]}>- Rarity:  <Text style={Styles.RORText}>{item.rarity}</Text></Text>
                                    <Text style={[Styles.RORText,{color: "#e0e0e0"}]}>- Cooldown:  <Text style={Styles.RORText}>{item.cooldown}</Text></Text>
                                    <Text style={[Styles.RORText,{color: "#e0e0e0"}]}>- Stack type:  <Text style={Styles.RORText}>{item.stackType}</Text></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}