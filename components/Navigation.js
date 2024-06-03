import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./GameScreen";
import ROR2Items from "./ROR2/Items"
import ROR2ItemSearch from "./ROR2/ItemsSearch"
import ROR2ItemInfo from "./ROR2/ItemInfo";
import RORRItems from "./RORR/Items"
import RORRItemSearch from "./RORR/ItemsSearch"
import RORRItemInfo from "./RORR/ItemInfo";
import LoginScreen from "./LoginScreen"

const MainStack = createNativeStackNavigator()

//const GameSelect = () => (
export default props => (
    <MainStack.Navigator initialRouteName="GameSelect" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="GameSelect" component={GameScreen}/>
        <MainStack.Screen name="ROR2Items" component={ROR2Items}/>
        <MainStack.Screen name="ROR2ItemSearch" component={ROR2ItemSearch}/>
        <MainStack.Screen name="ROR2ItemInfo" component={ROR2ItemInfo}/>
        <MainStack.Screen name="RORRItems" component={RORRItems}/>
        <MainStack.Screen name="RORRItemSearch" component={RORRItemSearch}/>
        <MainStack.Screen name="RORRItemInfo" component={RORRItemInfo}/>
        <MainStack.Screen name="Login" component={LoginScreen}/>
    </MainStack.Navigator>
)
