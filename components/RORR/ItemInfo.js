import { Image, Text, ImageBackground, View, ScrollView, TouchableOpacity } from 'react-native'
import Styles from '../Styles'
import { capitalize } from '../common'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useContext } from 'react'
import UserContext from  "../User/UserContext"
import { isFavorited } from '../common'

export default props => {
    const {state, dispatch} = useContext(UserContext)
    const item = props.route.params

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ flex: 1, marginTop: 54 }}>
                    <View style={{ flex: 1, backgroundColor: "#333a4c", borderStyle: "solid", borderWidth: 6, borderColor: "#4b4b57", borderRadius: 5, margin: 10 }}>
                        <View style={Styles.card}>
                            <View style={[Styles.buttonInside, { flexDirection: "row", justifyContent: "center", alignItems:'center', padding: 8 }]}>
                                <Image style={{ width: 64, height: 64, resizeMode: "contain"}} source={{ uri: item.image }} />
                                <View style={{ justifyContent: "center", alignItems: "center", flex:3/4 }}>
                                    <Text style={[Styles.RORText, { fontSize: 16, textAlign: 'center' }]}>{item.name}</Text>
                                </View>
                                <TouchableOpacity onPress={()=>dispatch({type: "toggleFavorite", payload: {user: state.user, item_id: item.id}})}>
                                    <Ionicon size={20} color={isFavorited(item.id,state.user) ? "gold" : Styles.RORText.color} name={isFavorited(item.id,state.user) ? "star" : "star-outline"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Styles.card, { flex: 2 }]}>
                            <View style={[Styles.buttonInside, {flex: 1, paddingHorizontal: 16, paddingBottom: 16}]}>

                            <ScrollView style={{flex: 1}}>
                                <Text style={[Styles.RORText,{marginTop: 16}]}>{item.pickup}</Text>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Description:</Text>
                                    <Text style={Styles.RORText}>{item.description}</Text>
                                </View>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Details:</Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Rarity:  <Text style={Styles.RORText}>{capitalize(item.rarity)}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Category:  <Text style={Styles.RORText}>{item.category}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Cooldown:  <Text style={Styles.RORText}>{item.cooldown ? item.cooldown : "N/A"}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Stack type:  <Text style={Styles.RORText}>{item.stackType ? item.stackType : "N/A"}</Text></Text>
                                </View>
                                {item.lore &&
                                <>
                                    <View style={{ marginTop: 24 }}>
                                        <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Lore:</Text>
                                        <Text style={Styles.RORText}>{item.lore}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", alignContent: "center", justifyContent: "center", marginTop: 8}}>
                                        <View style={{marginBottom: 8, flex: 1/2}}>
                                            <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 14, marginBottom: 6}]}>Destination:</Text>
                                            <Text style={Styles.RORText}>{item.destination}</Text>
                                        </View>
                                        <View style={{marginBottom: 8, flex: 1/2}}>
                                            <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 14, marginBottom: 6}]}>Date:</Text> 
                                            <Text style={Styles.RORText}>{item.date}</Text>
                                        </View>
                                    </View>
                                </>
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