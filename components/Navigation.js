import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameScreen from "./GameScreen";

const MainStack = createNativeStackNavigator()

//const GameSelect = () => (
export default props => (
    <MainStack.Navigator initialRouteName="GameSelect" screenOptions={{headerShown: false}}>
        <MainStack.Screen name="GameSelect" component={GameScreen}/>
    </MainStack.Navigator>
)
