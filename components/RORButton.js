import { TouchableOpacity, View } from "react-native";
import Styles from "./Styles";
import { StyleSheet } from "react-native";

export default props => {
    return (
        <TouchableOpacity style={Styles.button}>
            <View style={styles.buttonInside}>
                {props.children}
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