import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    RORText:{
        fontFamily: "Risk-of-Rain", 
        color: "#a6aeb1" 
    },
    button: {
        borderStyle: "solid",
        borderColor: "#4b4b57",
        borderWidth: 5,
        backgroundColor: "#333a4c",
        marginRight: 40,
        marginLeft: 40,
        borderRadius: 5
    },
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
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
    },
    header: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        zIndex: 1,
        top: 0,
        position: "absolute"
    },
    icon: {
        borderStyle: "solid",
        borderColor: "#4b4b57",
        borderWidth: 5,
        backgroundColor: "#333a4c",
        margin: 10,
        borderRadius: 5,
        flex: 1/2,
    },
    card:{
        borderStyle: "solid",
        borderColor: "#4b4b57",
        borderWidth: 5,
        backgroundColor: "#1a1b20",
        margin: 10,
        borderRadius: 5,
    }

})
