import { Image, Text, ImageBackground, View, ScrollView } from 'react-native'
import Styles from '../Styles'
import { capitalize } from '../common'

export default props => {
    const item = props.route.params
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
                            <View style={[Styles.buttonInside, { flexDirection: "row", justifyContent: "center", padding: 8 }]}>
                                <Image style={{ width: 64, height: 64, resizeMode: "contain"}} source={{ uri: item.image }} />
                                <View style={{ justifyContent: "center", alignItems: "center", flex:3/4 }}>
                                    <Text style={[Styles.RORText, { fontSize: 16, textAlign: 'center' }]}>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.card, { flex: 2 }]}>
                            <View style={[Styles.buttonInside, {flex: 1, paddingHorizontal: 16, paddingBottom: 16}]}>

                            <ScrollView style={{flex: 1}}>
                                <Text style={[Styles.RORText,{marginTop: 16}]}>{handleStyledText(item.pickup)}</Text>
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