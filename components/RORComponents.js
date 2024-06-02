import { Image, TouchableOpacity, Text, View } from "react-native";
import Styles from "./Styles";
import { StyleSheet } from "react-native";

export const RORButton = props => {
    return (
        <TouchableOpacity style={Styles.button} onPress={props.onPress}>
            <View style={styles.buttonInside}>
                {props.children}
            </View>
        </TouchableOpacity>
    )
}

export const ItemIcon = ({item, navigation, onPress}) => {
    return (
    <TouchableOpacity style={Styles.icon} onPress={onPress}>
        <View style={[styles.buttonInside,{justifyContent:"center", alignContent: "center", alignItems: "center", flex:1}]}>
                <Image style={{ width: 64, height: 64, marginBottom: 8}} source={{ uri: item["itemImage"] }} />
                <Text style={[Styles.RORText, {textAlign: "center"}]}>{item["itemName"]}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonInside: {
        borderTopStyle: "solid",
        borderTopWidth: 2,
        borderTopColor: "black",
        borderLeftStyle: "solid",
        borderLeftWidth: 2,
        borderLeftColor: "black",
        padding: 4,
        borderBottomColor: "#323846",
        borderBottomStyle: "solid",
        borderBottomWidth: 2,
        borderRightColor: "#323846",
        borderRightStyle: "solid",
        borderRightWidth: 2,
    }
})