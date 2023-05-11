
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'; // importar componentes 

export default function BemVindo() {
    return (
        <View style={estilos.container}>
            <View style={estilos.containerLogo}>
                <Image
                    source={require('../../assets/logo.png')} // Chama a imagem
                    style={{ width: '100%' }} // Pegar toda largura da tela
                    resizeMode="contain" // dimensiona a imagem sem cortes
                />
            </View >

            <View style={estilos.containerForm}>
                <Text style={estilos.titulo}>Monitore os seus gastos de qualquer lugar!</Text>
                <Text style={estilos.texto}>Faça o Login pra começar</Text>

                <TouchableOpacity style={estilos.containerBotao}>
                    <Text style={estilos.containerBotaoTexto}>Acessar</Text>
                </TouchableOpacity>

            </View>
        </View>

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
        justifyContent: 'center', // Centralizar na vertical e horizontal
        //alignItems: 'center'  // Centralizar na vertical e horizontal

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
        color: '#a1a1a1'
    }
})