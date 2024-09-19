import { View, ImageBackground, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Styles from '../Styles'
import { useState } from 'react'
import { ItemIcon, RORButton } from '../RORComponents'
import FilterPopup from './filterPopup'
import { itemIndex } from '../itemIndex'

export default props => {
    const items_list = itemIndex["ROR2"]

    const allItems = [...items_list["common"], ...items_list["uncommon"], ...items_list["legendary"], ...items_list["void"], ...items_list["lunar"], ...items_list["boss"], ...items_list["equipment"]]
    const [showType, setShowType] = useState("all")
    const [filterText, setFilterText] = useState("Showing all")

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ margin: 8, marginTop: 50, flex: 1 }}>
                    <View style={{ position: "absolute", width: "100%", zIndex: 1 }}>
                        <Image style={{ width: "100%" }} source={require('../../assets/RORR_Header.png')}></Image>
                        <View style={{ position: "absolute", top: 22, left: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent:"center"}}>
                            <Text style={{ fontFamily: "risk-of-rain", color: "#a6aeb1" }}>ITEMS</Text>
                        </View>
                        <View style={{ position: "absolute", bottom: -4, right: 34, }}>
                            <FilterPopup filterText={filterText} showType={showType} setShowType={setShowType} setFilterText={setFilterText} navigation={props.navigation}/>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#1a1b20", borderStyle: "solid", borderWidth: 10, borderColor: "#2c2e3a", borderRadius: 5 }}>
                        <View style={{ flex: 1, marginTop: 54, justifyContent: "center" }}>
                            <FlatList data={showType == "all" && allItems || items_list[showType]}
                                keyExtractor={item => item["_id"]}
                                numColumns={2}
                                renderItem={(item) =>
                                    <ItemIcon item={item["item"]}
                                        navigation={props.navigation}
                                        contentContainerStyle={{ alignSelf: 'flex-start' }}
                                        imageSize={64}
                                        game={"ROR2"}
                                    />
                                }
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}