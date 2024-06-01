import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./GameScreen";
import ROR2Items from "./ROR2/Items"

const MainStack = createNativeStackNavigator()

//const GameSelect = () => (
export default props => (
    <MainStack.Navigator initialRouteName="GameSelect" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="GameSelect" component={GameScreen}/>
        <MainStack.Screen name="ROR2Items" component={ROR2Items}/>
    </MainStack.Navigator>
)
