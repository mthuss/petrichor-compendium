import { TouchableOpacity, Image, Text, ImageBackground, View, ScrollView } from 'react-native'
import Styles from '../Styles'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useContext } from 'react'
import UserContext from  "../User/UserContext"
import { isFavorited } from '../common'

export default props => {
    const item = props.route.params
    const {state, dispatch} = useContext(UserContext)

    function handleStyledText (text) { //unfortunately only handles void (purple) and red text individually, NOT concurrently
        const returnText = []
        const void_sections = text.match(/<style=cIsVoid>.*?<\/style>/g)
        const red_sections = text.match(/<color=.*?>.*?<\/color>/g)
        var j = 0
        if (void_sections) {
            const non_void_sections = text.split(/<style=cIsVoid>.*?<\/style>/g)
            const length = void_sections.length > non_void_sections.length ? void_sections.length : non_void_sections.length
            for (let i = 0; i < length; i++,j++) {
                let styled_no_tags = String(void_sections[i]).replace(/(<([^>]+)>)/ig, "")
                returnText.push(<Text key={j} style={Styles.RORText}>{non_void_sections[i]}</Text>)
                j++
                if (void_sections[i])
                    returnText.push(<Text key={j} style={[Styles.RORText, { color: "purple" }]}>{styled_no_tags}</Text>)
            }
            return returnText
        }
        else if (red_sections) {
            const non_red_sections = text.split(/<color=.*?>.*?<\/color>/g)
            const length = red_sections.length > non_red_sections.length ? red_sections.length : non_red_sections.length
            for (let i = 0; i < length; i++, j++) {
                let styled_no_tags = String(red_sections[i]).replace(/(<([^>]+)>)/ig, "")
                returnText.push(<Text key={j} style={Styles.RORText}>{non_red_sections[i]}</Text>)
                j++
                if (red_sections[i])
                    returnText.push(<Text key={j} style={[Styles.RORText, { color: "#FF7F7F" }]}>{styled_no_tags}</Text>)
            }
            return returnText
        }
        else
            return <Text style={Styles.RORText}>{text}</Text>
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ flex: 1, marginTop: 54 }}>
                    <View style={{ flex: 1, backgroundColor: "#333a4c", borderStyle: "solid", borderWidth: 6, borderColor: "#4b4b57", borderRadius: 5, margin: 10 }}>
                        <View style={Styles.card}>
                            <View style={[Styles.buttonInside, { flexDirection: "row", justifyContent: "center", alignItems:"center", alignContent: "center", padding: 8 }]}>
                                <Image style={{ width: 64, height: 64 }} source={{ uri: item.image }} />
                                <View style={{ justifyContent: "center", alignItems: "center", flex: 3/4 }}>
                                    <Text style={[Styles.RORText, { fontSize: 16, textAlign: 'center' }]}>{item.name}</Text>
                                </View>
                                <TouchableOpacity onPress={()=>dispatch({type: "toggleFavorite", payload: {user: state.user, item_id: item.id}})}>
                                    <Ionicon size={20} color={isFavorited(item.id,state.user) ? "gold" : Styles.RORText.color} name={isFavorited(item.id,state.user) ? "star" : "star-outline"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[Styles.card, { flex: 2 }]}>
                            <View style={[Styles.buttonInside, {flex: 1, paddingHorizontal: 16, paddingBottom: 16}]}>

                            <ScrollView style={{ flex: 1 }}>
                                <Text style={[Styles.RORText,{marginTop: 16}]}>{handleStyledText(item.pickup)}</Text>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Description:</Text>
                                    <Text style={Styles.RORText}>{item.description}</Text>
                                </View>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Details:</Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Rarity:  <Text style={Styles.RORText}>{item.rarity}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Cooldown:  <Text style={Styles.RORText}>{item.cooldown}</Text></Text>
                                    <Text style={[Styles.RORText, { color: "#e0e0e0" }]}>- Stack type:  <Text style={Styles.RORText}>{item.stackType}</Text></Text>
                                </View>
                                <View style={{ marginTop: 24 }}>
                                    <Text style={[Styles.RORText, { color: "#e6cc81", fontSize: 20, marginBottom: 8 }]}>Lore:</Text>
                                    <Text style={Styles.RORText}>{item.lore}</Text>
                                </View>
                            </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}