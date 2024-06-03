import { View, ImageBackground, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Styles from '../Styles'
import { useState } from 'react'
import { ItemIcon, RORButton } from '../RORComponents'
import Ionicon from 'react-native-vector-icons/Ionicons'
import FilterPopup from '../RORR/filterPopup'

export default props => {
    const data_dir = "../../data/RORR/items/"
    const items_list = {
        "common": require(data_dir + 'common_items.json'),
        "uncommon": require(data_dir + 'uncommon_items.json'),
        "legendary": require(data_dir + 'legendary_items.json'),
        "boss": require(data_dir + 'boss_items.json'),
        "equipment": require(data_dir + 'equipment_items.json'),
        "special": require(data_dir + 'special_items.json'),
    }

    const allItems = [...items_list["common"], ...items_list["uncommon"], ...items_list["legendary"], ...items_list["boss"], ...items_list["equipment"], ...items_list["special"]]
    const [showType, setShowType] = useState("all")
    const [filterText, setFilterText] = useState("Showing all")
    const [reachedEnd, setReachedEnd] = useState(false)

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ margin: 8, marginTop: 50, flex: 1 }}>
                    <View style={{ position: "absolute", width: "100%", zIndex: 1 }}>
                        <Image style={{ width: "100%" }} source={require('../../assets/RORR_Header.png')}></Image>
                        <View style={{ position: "absolute", top: 22, left: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent:"center"}}>
                            <Text style={{ fontFamily: "Risk-of-Rain", color: "#a6aeb1" }}>ITEMS</Text>
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
                                        game={"RORR"}
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