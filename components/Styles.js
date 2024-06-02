import { StyleSheet } from "react-native";

export const itemColors = {
    "all": "#a6aeb1",
    "common": "#a6aeb1",
    "uncommon": "#7bc742",
    "legendary": "#f75a44",
    "void": "#e49bf1",
    "lunar": "#3ad0eb",
    "boss": "#ceda23",
    "equipment": "#e6902e"
}

export const colors = {
    mainBg: "#333a4c",
    bgAlt: "#1a1b20",
    buttonBorder: "#4b4b57",
}

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
    },
    FloatingButton: {
        borderRadius: 5,
        height: 64,
        width: 64,
        backgroundColor: colors.mainBg,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 32,
        elevation: 2,
        borderColor: colors.buttonBorder,
        borderStyle: "solid",
        borderWidth: 5
    },
    searchButton: {
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 42

    }

})
