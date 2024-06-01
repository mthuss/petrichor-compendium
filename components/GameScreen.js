import React from 'react';
import Styles from './Styles';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RORButton from './RORButton';
import { useFonts } from 'expo-font';

const aspectRatio = 1080 / 1000
const scaledWidth = Dimensions.get('window').width;
const scaledHeight = scaledWidth / aspectRatio;

export default props => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/main_bg.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.logoView}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                </View>
                <View style={{ flex: 1, zIndex: 1 }}>
                    <View style={{ paddingBottom: 10 }}>
                        <RORButton><Text style={{ fontFamily: "Risk-of-Rain", color: "#a6aeb1" }}>Risk of Rain</Text></RORButton>
                    </View>
                    <View style={{ paddingBottom: 10 }}>
                        <RORButton onPress={() => props.navigation.navigate("ROR2Items")}><Text style={{ fontFamily: "Risk-of-Rain", color: "#a6aeb1" }}>Risk of Rain <Text style={{ color: "#fffeb3" }}>2</Text></Text></RORButton>
                    </View>
                    <View>
                        <RORButton><Text style={{ fontFamily: "Risk-of-Rain", color: "#a6aeb1" }}>Risk of Rain Returns</Text></RORButton>
                    </View>
                </View>
                <Image source={require('../assets/titlescreen.gif')} style={styles.gif} />
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    gif: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: scaledWidth,
        height: scaledHeight,
        position: 'absolute',
        bottom: 0
    },
    logo: {
        width: "85%",
        height: "85%",
        //    width: null,
        //    height: null,
        flex: 1,
        resizeMode: 'contain',
    },
    logoView: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
        flex: 3/4
    }
});