import { createNativeStackNavigator } from "@react-navigation/native-stack"; // importa Stack.Navigator do Native Stack

import BemVindo from '../pages/bemvindo'  // importa a função BemVindo
import Autenticar from '../pages/autenticar'  // importa a função Autenticar

const Stack = createNativeStackNavigator();

// configurar as nossas rotas:

export default function Rotas() {

    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Welcome"  // É o header (Título)
                component={BemVindo} // Escreve a função BemVindo
                options={{ headerShown: false }} // desabilita o header
            />

            <Stack.Screen
                name="Autenticar" // É o nome usado pra chamar a página
                component={Autenticar}
                options={{ headerShown: false }} // desabilita o header
            />

        </Stack.Navigator>
    )
}