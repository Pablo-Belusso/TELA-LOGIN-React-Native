
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'; // importar componentes 

import * as Animatable from 'react-native-animatable'
// para funcionar você tem instalar no terminal: expo install react-native-animatable

import { useNavigation } from "@react-navigation/native";
// Vai servir pra levar a gente para a página "autenticar"

export default function BemVindo() {

    const navegacao = useNavigation();

    return (
        <View style={estilos.container}>
            <View style={estilos.containerLogo}>
                <Animatable.Image // chama o Animatable na tag "Image"
                    animation="flipInY" // chama o efeito da animação
                    source={require('../../assets/logo.png')} // Chama a imagem
                    style={{ width: '100%' }} // Pegar toda largura da tela
                    resizeMode="contain" // dimensiona a imagem sem cortes
                />
            </View >

            <Animatable.View delay={800} animation="fadeInUp" style={estilos.containerForm}>
                <Text style={estilos.titulo}>Monitore os seus gastos de qualquer lugar!</Text>
                <Text style={estilos.texto}>Faça o Login pra começar</Text>


                <TouchableOpacity
                    style={estilos.Botao}
                    onPress={() => navegacao.navigate('Autenticar')}
                >
                    <Text style={estilos.BotaoTexto}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View >

    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1, // Vou querer que pegue o tamanho inteiro da tela
        backgroundColor: '#38a69d'
    },
    containerLogo: {
        flex: 2, // Vou querer o dobro do tamanho do containerForm
        backgroundColor: '#38a69d',
        justifyContent: 'center', // Centralizar na vertical
        alignItems: 'center'  // Centralizar na horizontal

    },
    containerForm: {
        flex: 1, // Vou querer a metade do tamanho do containerLogo
        backgroundColor: 'white',
        borderTopLeftRadius: 25, // Arredondar a borda superior esquerda
        borderTopRightRadius: 25, // Arredondar a borda superior direita
        paddingStart: '5%', // Descolar o texto da borda no início
        paddingEnd: '5%' // Descolar o texto da borda no final
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 12
    },
    texto: {
        marginTop: 5,
        color: '#a1a1a1',
        alignSelf: 'center'

    },
    Botao: {  // estilização da estrutura do Botão

        position: 'absolute', // vai ficar absoluto sobre a área
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 20, // espaçamento vertical
        width: '60%',
        alignSelf: 'center', // alinhar ao centro na horizontal
        bottom: '10%', // alinhar na vertical em baixo
        alignItems: 'center',  // Centralizar os items de dentro do botão
        justifyContent: 'center', // Centralizar na vertical e horizontal

    },
    BotaoTexto: {   // estilização do Texto do Botão
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})