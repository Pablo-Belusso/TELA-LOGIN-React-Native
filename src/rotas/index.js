import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from '../pages/bemvindo'  // importa a função BemVindo
import Autenticar from '../pages/autenticar'  // importa a função Autenticar

const Stack = createNativeStackNavigator();

// configurar as nossas rotas:

export default function Rotas() {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="BemVindo"
                component={BemVindo}
            />

            <Stack.Screen
                name="Autenticar"
                component={Autenticar}
            />

        </Stack.Navigator>
    )
}