import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu"
import Ionicon from 'react-native-vector-icons/Ionicons'
import Styles, {itemColors} from '../Styles'
import { View, Text } from "react-native"

export default props =>{
    return(
        <View>
            <Menu>
                <MenuTrigger>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicon size={12} color={Styles.RORText.color} name="chevron-down-outline" />
                        <Text style={{ fontFamily: "risk-of-rain", color: itemColors[props.showType], marginLeft: 10 }}>{props.filterText}</Text>
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsContainer: {
                        borderRadius: 5,
                        borderWidth: 5,
                        borderStyle: "solid",
                        borderColor: "#2c2e3a",
                        marginTop: 30,
                        marginLeft: 20,
                        // backgroundColor: Styles.icon.backgroundColor,
                        backgroundColor: "#1a1b20"
                    }
                }}>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => {props.navigation.navigate("ROR2ItemSearch")}}>
                        <Text style={Styles.RORText}>Search</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("all"); props.setFilterText("Showing all")}}>
                        <Text style={Styles.RORText}>All</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("common"); props.setFilterText("Common")}}>
                        <Text style={Styles.RORText}>Common</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("uncommon"); props.setFilterText("Uncommon")}}>
                        <Text style={[Styles.RORText,{color: itemColors["uncommon"]}]}>Uncommon</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("legendary"); props.setFilterText("Legendary")}}>
                        <Text style={[Styles.RORText,{color: itemColors["legendary"]}]}>Legendary</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("void"); props.setFilterText("Void")}}>
                        <Text style={[Styles.RORText,{color: itemColors["void"]}]}>Void</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("lunar"); props.setFilterText("Lunar")}}>
                        <Text style={[Styles.RORText,{color: itemColors["lunar"]}]}>Lunar</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("boss"); props.setFilterText("Boss")}}>
                        <Text style={[Styles.RORText,{color: itemColors["boss"]}]}>Boss</Text>
                    </MenuOption>
                    <MenuOption style={[Styles.icon,{margin: 4}]} onSelect={() => { props.setShowType("equipment"); props.setFilterText("Equipment")}}>
                        <Text style={[Styles.RORText,{color: itemColors["equipment"]}]}>Equipment</Text>
                    </MenuOption>

                </MenuOptions>
            </Menu>
        </View>
    )
}