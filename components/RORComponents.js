import { Image, TouchableOpacity, Text, View } from "react-native";
import Styles from "./Styles";
import { StyleSheet } from "react-native";

export const RORButton = props => {
    return (
        <TouchableOpacity style={Styles.button} onPress={props.onPress}>
            <View style={Styles.buttonInside}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

export const ItemIcon = ({item, navigation, imageSize, game}) => {
    return (
    <TouchableOpacity style={Styles.icon} onPress={()=>navigation.navigate(game+"ItemInfo", 
    {   
        id: item["_id"],
        name: item["itemName"] ,
        image: item["itemImage"],
        color: item["color"],
        description: item["description"],
        rarity: item["rarity"],
        stackType: item["stackType"],
        cooldown: item["cooldown"],
        pickup: item["pickup"],
        lore: item["lore"],
        category: item["category"],
        date: item["date"],
        destination: item["destination"]
    })}>
        <View style={[Styles.buttonInside,{justifyContent:"center", alignContent: "center", alignItems: "center", flex:1}]}>
                <Image style={{ width: imageSize, height: imageSize, marginBottom: 8, resizeMode: "contain"}} source={{ uri: item["itemImage"] }} />
                <Text style={[Styles.RORText, {textAlign: "center"}]}>{item["itemName"]}</Text>
            </View>
        </TouchableOpacity>
    )
}