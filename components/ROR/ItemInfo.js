import { Image, Text, ImageBackground, View, ScrollView } from 'react-native'
import Styles from '../Styles'
import { capitalize } from '../common'

export default props => {
    const item = props.route.params

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ flex: 1, marginTop: 54 }}>
                    <View style={{ flex: 1, backgroundColor: "#333a4c", borderStyle: "solid", borderWidth: 6, borderColor: "#4b4b57", borderRadius: 5, margin: 10 }}>
                        <View style={Styles.card}>
                            <View style={[Styles.buttonInside, { flexDirection: "row", justifyContent: "center", padding: 8 }]}>
                                <Image style={{ width: 64, height: 64 }} source={{ uri: item.image }} />
                                <View style={{ justifyContent: "center", alignItems: "center", flex: 3/4 }}>
                                    <Text style={[Styles.RORText, { fontSize: 16, textAlign: 'center' }]}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.card, { flex: 2 }]}>
                            <View style={[Styles.buttonInside, {flex: 1, paddingHorizontal: 16, paddingBottom: 16}]}>

                            <ScrollView style={{ flex: 1 }}>
                                {item.pickup && <Text style={[Styles.RORText,{marginTop: 16, marginBottom: 8}]}>{item.pickup}</Text> }
                                <View style={{marginTop: 16}}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Description:</Text>
                                    <Text style={Styles.RORText}>{item.description}</Text>
                                </View>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Details:</Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Rarity:  <Text style={Styles.RORText}>{item.rarity ? capitalize(item.rarity) : "N/A"}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Cooldown:  <Text style={Styles.RORText}>{item.cooldown ? item.cooldown : "N/A"}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Stack type:  <Text style={Styles.RORText}>{item.stackType ? item.cooldown : "N/A"}</Text></Text>
                                </View>
                                    {item.lore &&
                                        <View style={{ marginTop: 24 }}>
                                            <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Lore:</Text>
                                            <Text style={Styles.RORText}>{item.lore}</Text>
                                        </View>
                                    }
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}