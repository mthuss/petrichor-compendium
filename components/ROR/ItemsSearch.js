import { View, TextInput, ImageBackground, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import Styles from '../Styles'
import { useState } from 'react'
import { ItemIcon, RORButton } from '../RORComponents'
import FilterPopup from './filterPopup'
import { itemIndex } from '../itemIndex'

export default props => {
    const items_list = itemIndex["ROR"]

    const allItems = [...items_list["common"], ...items_list["uncommon"], ...items_list["legendary"], ...items_list["boss"], ...items_list["equipment"]]
    const [showType, setShowType] = useState("all")
    const [query, setQuery] = useState("")
    const [filteredList, setFilteredList] = useState(showType == "all" ? allItems : items_list[showType])

    function handleTextChange(query) {
        setQuery(query)
        if(showType == "all")
            setFilteredList(allItems.filter(item => (item["itemName"].toLowerCase().includes(query.toLowerCase()))))
        else
            setFilteredList(items_list[showType].filter(item => (item["itemName"].toLowerCase().includes(query.toLowerCase()))))
    }

    return (
        <View style={Styles.container}>
            <ImageBackground source={require('../../assets/main_bg.png')} resizeMode="cover" style={Styles.imageBackground}>
                <View style={{ margin: 8, marginTop: 50, flex: 1 }}>
                    <View style={{ position: "absolute", width: "100%", zIndex: 1 }}>
                        <Image style={{ width: "100%" }} source={require('../../assets/RORR_Header.png')}></Image>
                        <Text style={{ position: "absolute", top: 22, left: 30, fontFamily: "risk-of-rain", color: "#a6aeb1" }}>ITEMS</Text>
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#1a1b20", borderStyle: "solid", borderWidth: 10, borderColor: "#2c2e3a", borderRadius: 5 }}>
                        <View style={{ flex: 1, marginTop: 54, justifyContent: "center" }}>
                            <View style={{marginLeft: 10, marginRight: 10, marginBottom: 6}}>
                                <TextInput fontSize={16} paddingLeft={6} placeholderTextColor={Styles.RORText.color} fontFamily={Styles.RORText.fontFamily} style={Styles.RORText} color={Styles.RORText.color} placeholder="Search..." onChangeText={handleTextChange} value={query} />
                            </View>
                            <FlatList data={filteredList}
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