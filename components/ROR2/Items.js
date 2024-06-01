import { View, ImageBackground, Text, Image, FlatList } from 'react-native'
import Styles from '../Styles'

export default props => {

    return(
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{margin: 8, marginTop: 50, flex: 1}}>
                    <View style={{position: "absolute", width: "100%", zIndex: 1}}>
                        <Image style={{ width: "100%" }} source={require('../../assets/RORR_Header.png')}></Image>
                        <Text style={{position:"absolute", top: 22, left: 30, fontFamily: "Risk-of-Rain", color: "#a6aeb1" }}>ITEMS</Text>
                    </View>
                    <View style={{flex: 1, backgroundColor: "#1a1b20", borderStyle: "solid", borderWidth: 10, borderColor:"#2c2e3a", borderRadius: 5}}>
                        <View style={{flex: 1, marginTop: 54}}>
                            <FlatList></FlatList>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}