import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./GameScreen";
import ROR2Items from "./ROR2/Items"
import ROR2ItemSearch from "./ROR2/ItemsSearch"
import ItemInfo from "./ItemInfo";

const MainStack = createNativeStackNavigator()

//const GameSelect = () => (
export default props => (
    <MainStack.Navigator initialRouteName="GameSelect" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="GameSelect" component={GameScreen}/>
        <MainStack.Screen name="ROR2Items" component={ROR2Items}/>
        <MainStack.Screen name="ROR2ItemSearch" component={ROR2ItemSearch}/>
        <MainStack.Screen name="ItemInfo" component={ItemInfo}/>
    </MainStack.Navigator>
)
